import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../env/environment';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiscialYearService {

  FISCIALYEAR_URL = `${env.API_URL}FiscialYear/`;

  constructor(private http: HttpClient) { }

  GetFiscialYears(): any {
    return this.http.get(`${this.FISCIALYEAR_URL}GetFiscialYears`).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to fetch data from the server.'));
      })
    )
  }
}
