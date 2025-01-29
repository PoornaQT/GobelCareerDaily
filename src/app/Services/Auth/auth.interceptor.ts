import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  isLoggedIn: string | undefined = '';

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('idToken');
    if (idToken) {
      const cloneReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${idToken}`
        }
      });
      console.log("Bareer", cloneReq);

      return next.handle(cloneReq);
    }
    return next.handle(req);
  }


}
