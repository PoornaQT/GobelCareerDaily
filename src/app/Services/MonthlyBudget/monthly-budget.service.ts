import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../Envirolmant/Env';
import { MonthlyBudget } from '../../Models/MonthlyBudget';

@Injectable({
  providedIn: 'root'
})
export class MonthlyBudgetService {

  MONTHLYBUDGET_URL = `${API_URLS.API_URL}MonthlyBudget/`;
  constructor(private Http: HttpClient) { }

  GetMonthlyBudgetByPONumber(PONumber: number): any {
    return this.Http.get
      (`${this.MONTHLYBUDGET_URL}GetMonthlyBudget/` + PONumber);
  }

  DeleteMonthlyBudget(MBId: number): any {
    return this.Http.delete
      (`${this.MONTHLYBUDGET_URL}DeleteMonthlyBudget/` + MBId);
  }

  UpdateMonthlyBudget(monthlyBudget: MonthlyBudget): any {
    return this.Http.put
      (`${this.MONTHLYBUDGET_URL}UpdateMonthlyBudget/`,monthlyBudget);
  }

  MonthlyBudgetByMBId(MBId: number): any {
    return this.Http.get
      (`${this.MONTHLYBUDGET_URL}SP_MonthlyBudgetByMBId/`+MBId);
  }
}
