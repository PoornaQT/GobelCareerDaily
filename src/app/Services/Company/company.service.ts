import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, throwError } from 'rxjs';
import { env } from '../../../env/environment';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  COMPANY_URL = `${env.API_URL}Company/`;

  constructor(private http: HttpClient) { }

  GetCompanies() {
    return this.http.get(`${this.COMPANY_URL}GetCompanies`).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to fetch data from the server.'));
      })
    );
  }
}
