import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../Envirolmant/Env';

@Injectable({
  providedIn: 'root'
})
export class BillableService {

  BILLABLE_URL = `${API_URLS.API_URL}Billable/`;
  
  constructor(private Http: HttpClient) { }

  GetBillable(): any {
    return this.Http.get(
      `${this.BILLABLE_URL}GetBillables`
    )
  }
}
