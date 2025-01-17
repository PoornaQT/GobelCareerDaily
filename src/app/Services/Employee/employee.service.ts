import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../Envirolmant/Env';
import { Employee } from '../../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  EMPLOYEE_URL = `${API_URLS.API_URL}Employee/`;

  constructor(private Http: HttpClient) { }


  AddEmployeeDetails(employeeData :Employee): any {
    return this.Http.post(
      `${this.EMPLOYEE_URL}AddEmployee`,employeeData
    );
  }
}
