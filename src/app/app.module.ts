import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingDataComponent } from './Components/Billing/BillingData/billing-data/billing-data.component';
import { TopnavComponent } from './Components/HomePage/TopNav/topnav/topnav.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MonthlyBudgetComponent } from './Components/Billing/MonthlyBudget/monthly-budget/monthly-budget.component';
import { AddEmployeeComponent } from './Components/Employees/AddEMployee/add-employee/add-employee.component';
import { MonthlyInVoiceComponent } from './Components/Billing/MonthlyInVoice/monthly-in-voice/monthly-in-voice.component';
import { BottomComponent } from './Components/HomePage/Bottom/bottom/bottom.component';
import { ManageComponent } from './Components/Manage/ManageSidBar/manage/manage.component';
import { ManageProjectComponent } from './Components/Manage/ManageProject/manage-project/manage-project.component';
import { ManageVenderComponent } from './Components/Manage/ManageVender/manage-vender/manage-vender.component';
import { ManageClientComponent } from './Components/Manage/ManageClient/manage-client/manage-client.component';
import { ManageRoleComponent } from './Components/Manage/ManageRole/manage-role/manage-role.component';
import { MonthsListComponent } from './Components/Billing/MonthsList/months-list/months-list.component';
import { LoginComponent } from './Components/AuthComponent/login/login.component';
import { MsalGuard, MsalInterceptor, MsalModule } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../app/Envirolmant/Env'
import { AuthService } from './Services/Auth/auth.interceptor';


// const msalConfig = {
//   auth: {
//     clientId: '49cdfa65-39b3-4049-9691-89ee21475e4a',
//     authority: 'https://login.microsoftonline.com/common',
//     redirectUri: 'http://localhost:4200/',
//   },
//   cache: {
//     cacheLocation: 'localStorage',
//     storeAuthStateInCookie: false,
//   },
// };

@NgModule({
  declarations: [
    AppComponent,
    BillingDataComponent,
    TopnavComponent,
    MonthlyBudgetComponent,
    AddEmployeeComponent,
    MonthlyInVoiceComponent,
    BottomComponent,
    ManageComponent,
    ManageProjectComponent,
    ManageVenderComponent,
    ManageClientComponent,
    ManageRoleComponent,
    MonthsListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MsalModule.forRoot(new PublicClientApplication(msalConfig), {
      interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: ['user.read'],
      },
    }, {
      interactionType: InteractionType.Redirect,
      protectedResourceMap: new Map([
        ['https://graph.microsoft.com/v1.0/me', ['user.read']]
      ])
    }),

  ],
  providers: [
    MsalInterceptor, MsalGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService, // Add the AuthInterceptor to the provider array
      multi: true // Ensures that multiple interceptors can be added if needed
    },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
