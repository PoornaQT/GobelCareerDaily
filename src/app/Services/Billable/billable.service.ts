import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class BillableService {

  BILLABLE_URL = `${env.API_URL}Billable/`;
  
  constructor(private Http: HttpClient) { }

  GetBillable(): any {
    return this.Http.get(
      `${this.BILLABLE_URL}GetBillables`
    )
  }
}
