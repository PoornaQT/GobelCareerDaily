import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../env/environment';

import { Employee } from '../../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  EMPLOYEE_URL = `${env.API_URL}Employee/`;

  constructor(private Http: HttpClient) { }


  AddEmployeeDetails(employeeData :Employee): any {
    return this.Http.post(
      `${this.EMPLOYEE_URL}AddEmployee`,employeeData
    );
  }
}
