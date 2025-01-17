import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../Envirolmant/Env';

@Injectable({
  providedIn: 'root'
})
export class BDmService {

  BDM_URL = `${API_URLS.API_URL}BDM/`;

  constructor(private Http: HttpClient) { }

  GetBDMs(): any {
    return this.Http.get(`${this.BDM_URL}GetBDMs`)
  }
}
