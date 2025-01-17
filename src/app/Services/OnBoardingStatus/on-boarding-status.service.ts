import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../Envirolmant/Env';

@Injectable({
  providedIn: 'root'
})
export class OnBoardingStatusService {

  ONBOARDINGSTATUS_URL = `${API_URLS.API_URL}OnBoardingStatus/`;

  constructor(private Http: HttpClient) { }

  GetOnBoardingStatus(): any {
    return this.Http.get(
      `${this.ONBOARDINGSTATUS_URL}GetOnBoardingStatuss`
    )
  }
}
