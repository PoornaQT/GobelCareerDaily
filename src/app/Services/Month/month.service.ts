import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../Envirolmant/Env';
import { catchError, throwError } from 'rxjs';
import { EmployeeList } from '../../Models/MonthList';

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

  GetMonthDetails_By_BillingId(BId: number): any {
    return this.http.get(`${this.MONTH_URL}GetMonthDetails_By_BillingId/` + BId).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to fetch data from the server.'));
      })
    )
  }

  GetEmployeesListByPId(PId: number,MId :number, PoNumber:number): any {
    return this.http.get(`${this.MONTH_URL}GetEmployeesByPId/${PId}/${MId}/${PoNumber}`).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to fetch data from the server.'));
      })
    )
  }

  AddMonthlyEmployeesList(employeeList: EmployeeList[]): any {
    return this.http.post(`${this.MONTH_URL}AddMonthlyEmployeesList`,employeeList).pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Unable to fetch data from the server.'));
      })
    )
  }
}
