import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../env/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {

  EMPLOYEETYPE_URL = `${env.API_URL}EmployeeType/`;

  constructor(private Http:HttpClient) { }

  GetEmployeeTypes():any{
    return this.Http.get(
      `${this.EMPLOYEETYPE_URL}GetEmployeeTypes`
    )
  }
}
