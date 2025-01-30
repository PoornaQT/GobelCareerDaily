import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { MsalService } from '@azure/msal-angular';
import { env } from './../../../env/environment'
import { AuthenticationResult, InteractionRequiredAuthError } from '@azure/msal-browser';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  isLoggedIn: boolean=false;

  constructor(private msalService: MsalService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.getToken().pipe(
      switchMap(token => {
        if (token) {
          const clonedRequest = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`
            }
          });
          return next.handle(clonedRequest); // Pass the cloned request with the token
        }
        return next.handle(req); // No token found, continue with the original request
      })
    );
  }

  getToken(): Observable<string> {
    const request = {
      scopes: env.scopes
    };

    const accounts = this.msalService.instance.getAllAccounts();
    if (accounts.length > 0) {
      this.msalService.instance.setActiveAccount(accounts[0]);
      this.isLoggedIn = true;
    } else {
      return throwError(() => new Error("No active account found. Please log in."));
    }

    return this.msalService.acquireTokenSilent(request).pipe(
      switchMap((response: AuthenticationResult) => {
        return of(response.accessToken);
      }),
      catchError(error => {
        console.error("Token error:", error);

        // If the error is "interaction_required", try interactive login
        if (error instanceof InteractionRequiredAuthError || error.message.includes("interaction_required")) {
          console.warn("Token expired or user interaction required. Redirecting to login...");
          this.router.navigate(['/login']); // 🔹 Redirect user to login page
        }
        return throwError(() => new Error("Error getting token"));
      })
    );
  }

  private acquireTokenWithPopup(request: any): Observable<string> {
    return new Observable(observer => {
      this.msalService.acquireTokenPopup(request).subscribe({
        next: (response: AuthenticationResult) => {
          observer.next(response.accessToken);
          observer.complete();
        },
        error: (error: any) => {
          console.error("Popup token acquisition failed:", error);
          observer.error(new Error("Failed to get token via popup"));
        }
      });
    });
  }
}

// canActivate(
//   next: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): boolean {
//   let isLoggedIn = this.authService.isAuthenticated();
//   if (isLoggedIn){
//     return true
//   } else {
//     this.router.navigate(['/login']);
//     return false;
//   }
// }
// }
