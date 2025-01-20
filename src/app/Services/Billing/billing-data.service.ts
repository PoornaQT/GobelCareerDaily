import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_URLS } from '../../Envirolmant/Env';
import { error } from 'console';
import { Billing } from '../../Models/Billing';

@Injectable({
  providedIn: 'root'
})
export class BillingDataService {

  BILLING_URL = `${API_URLS.API_URL}BillingData/`;

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

  GetBillingDataFiter(companyId: number, yearId: number, FiscalYearId: number): any {
    return this.Http.get(
      `${this.BILLING_URL}GetBillingdata/${companyId}/${yearId}/${FiscalYearId}
      `)
  }

}
