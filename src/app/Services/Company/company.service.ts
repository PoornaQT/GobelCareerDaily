import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { catchError, throwError } from 'rxjs';
import { API_URLS } from '../../Envirolmant/Env';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  COMPANY_URL = `${API_URLS.API_URL}Company/`;

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
