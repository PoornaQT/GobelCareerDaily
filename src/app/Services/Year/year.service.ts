import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { API_URLS } from './../../Envirolmant/Env'

@Injectable({
  providedIn: 'root'
})
export class YearService {

  YEAR_URL = `${API_URLS.API_URL}Year/`;

  constructor(private Http: HttpClient) { }

  GetYears(): any {
    return this.Http.get(`${this.YEAR_URL}GetYears`).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to fetch data from the server.'));
      })
    )
  }
}
