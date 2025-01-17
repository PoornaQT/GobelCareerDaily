import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../Envirolmant/Env';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthService {

  MONTH_URL = `${API_URLS.API_URL}Month/`;

  constructor(private http: HttpClient) { }

  Getmonth(): any {
    return this.http.get(`${this.MONTH_URL}GetMonths`).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to fetch data from the server.'));
      })
    )
  }
}
