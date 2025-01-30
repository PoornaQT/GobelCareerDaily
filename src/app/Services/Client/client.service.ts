import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../env/environment';
import { Client } from '../../Models/Clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  CLIENT_URL = `${env.API_URL}Client/`;

  constructor(private Http: HttpClient) { }

  GetClients(): any {
    return this.Http.get(
      `${this.CLIENT_URL}GerClients`)
  }

  DeleteClient(RId: number): any {
    return this.Http.delete(
      `${this.CLIENT_URL}DeleteClient/` + RId
    )
  }

  AddClient(clientData: Client): any {
    return this.Http.post(
      `${this.CLIENT_URL}AddClient`, clientData
    )
  }
  UpdateClient(clientData: Client): any {
    return this.Http.put(
      `${this.CLIENT_URL}UpdateClient`, clientData
    )
  }

  GetClientByCId(CId: number): any {
    return this.Http.get(
      `${this.CLIENT_URL}GetClientByCId/` + CId
    )
  }
}
