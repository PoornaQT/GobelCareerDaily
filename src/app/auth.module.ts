import { NgModule } from '@angular/core';
import { MsalModule, MsalService, MsalGuard, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MSAL_INTERCEPTOR_CONFIG, MsalBroadcastService, MsalInterceptorConfiguration, MsalGuardConfiguration } from '@azure/msal-angular';
import { BrowserCacheLocation, IPublicClientApplication, InteractionType, LogLevel, PublicClientApplication } from '@azure/msal-browser';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { env } from './../env/environment';


const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: env.auth.clientId,
      authority: `https://login.microsoftonline.com/${env.auth.tenantID}`,
      redirectUri: '/',
      postLogoutRedirectUri: '/'
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: isIE
    },
    system: {
      loggerOptions: {
        loggerCallback: (logLevel: LogLevel, message: string) => {
        },
        logLevel: LogLevel.Info,
        piiLoggingEnabled: false
      }
    }
  });
}

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();

  // Allow access to all routes under the base API URL
  protectedResourceMap.set(env.API_URL, env.scopes);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}


export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      // Use your API scope here
      scopes: env.scopes
    }
  };
}

@NgModule({
  imports: [
    MsalModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    MsalService,
    MsalGuard,
    MsalBroadcastService
  ]
})
export class AuthModule { }