import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {env} from './../../../env/environment'
@Injectable({
  providedIn: 'root'
})
export class BDmService {

  BDM_URL = `${env.API_URL}BDM/`;

  constructor(private Http: HttpClient) { }

  GetBDMs(): any {
    return this.Http.get(`${this.BDM_URL}GetBDMs`)
  }
}
