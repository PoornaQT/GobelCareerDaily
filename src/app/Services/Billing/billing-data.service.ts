import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { env } from '../../../env/environment';
import { error } from 'console';
import { Billing, dropDownFilter } from '../../Models/Billing';

@Injectable({
  providedIn: 'root'
})
export class BillingDataService {

  BILLING_URL = `${env.API_URL}BillingData/`;

  constructor(private Http: HttpClient) { }

  fetchBillingData(): any {
    return this.Http.get(
      `${this.BILLING_URL}GetBillingdata`);
  }

  GetPonumberDetails(BId: number): any {
    return this.Http.get(
      `${this.BILLING_URL}GetPONumberDetails_By_BillingId/` + BId);
  }

  deleteBillingData(BId: number) {
    return this.Http.delete(
      `${this.BILLING_URL}Delete_Billing_Data/` + BId);
  }

  GetBillingDataByBillingId(BId: number): any {
    return this.Http.get(
      `${this.BILLING_URL}GetBillingData_ByBillId/` + BId)
  }

  updateBillingData(billingData: Billing): Observable<any> {
    return this.Http.put<any>(
      `${this.BILLING_URL}UpdateBillingData`, billingData);
  }

  GetBillingDataFiter(dropdownfilter: dropDownFilter): any {
    return this.Http.post(
      `${this.BILLING_URL}GetBillingdata`, dropdownfilter)
  }

  Get_EmployeesStatus(): any {
    return this.Http.get(
      `${this.BILLING_URL}Get_EmployeesStatus`)
  }
}
