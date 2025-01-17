import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URLS } from '../../Envirolmant/Env';
import { Vender } from '../../Models/vender';

@Injectable({
  providedIn: 'root'
})
export class VenderService {

  VENDER_URL = `${API_URLS.API_URL}Vender/`;

  constructor(private Http: HttpClient) { }


  GetVenders(): any {
    return this.Http.get(`${this.VENDER_URL}GetVenders`);
  }

   DeleteVender(RId:number):any{
      return this.Http.delete(
        `${this.VENDER_URL}DeleteVender/`+RId
      )
    }
  
    AddVender(venderData:Vender):any{
      return this.Http.post(
        `${this.VENDER_URL}AddVender`,venderData
      )
    }

    GetVenderByVId(venderId:number):any{
      return this.Http.get(
        `${this.VENDER_URL}GetVenderByVId/`+venderId
      )
    }

    UpdateVender(venderData:Vender):any{
      return this.Http.put(
        `${this.VENDER_URL}UpdateVender`,venderData
      )
    }
}
