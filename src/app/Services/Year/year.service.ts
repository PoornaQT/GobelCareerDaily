import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { env } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class YearService {

  YEAR_URL = `${env.API_URL}Year/`;

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
