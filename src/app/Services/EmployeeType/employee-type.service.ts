import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../Envirolmant/Env';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {

  EMPLOYEETYPE_URL = `${API_URLS.API_URL}EmployeeType/`;

  constructor(private Http:HttpClient) { }

  GetEmployeeTypes():any{
    return this.Http.get(
      `${this.EMPLOYEETYPE_URL}GetEmployeeTypes`
    )
  }
}
