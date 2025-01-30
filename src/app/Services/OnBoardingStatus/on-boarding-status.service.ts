import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../env/environment';

@Injectable({
  providedIn: 'root'
})
export class OnBoardingStatusService {

  ONBOARDINGSTATUS_URL = `${env.API_URL}OnBoardingStatus/`;

  constructor(private Http: HttpClient) { }

  GetOnBoardingStatus(): any {
    return this.Http.get(
      `${this.ONBOARDINGSTATUS_URL}GetOnBoardingStatuss`
    )
  }
}
