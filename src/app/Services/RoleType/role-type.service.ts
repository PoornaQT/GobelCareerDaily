import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../../env/environment';
import { RoleType } from '../../Models/RoleType';

@Injectable({
  providedIn: 'root'
})
export class RoleTypeService {

  ROLETYPE_URL = `${env.API_URL}RoleType/`;

  constructor(private Http:HttpClient) { }

  GetRoleType():any{
    return this.Http.get(
      `${this.ROLETYPE_URL}GetRoleTypes`
    )
  }

  DeleteRoleType(RId:number):any{
    return this.Http.delete(
      `${this.ROLETYPE_URL}DeleteRoleType/`+RId
    )
  }

  AddRoleType(roletype:RoleType):any{
    return this.Http.post(
      `${this.ROLETYPE_URL}AddRoleType`,roletype
    )
  }

  GetRoleTypeByRId(RId:number):any{
    return this.Http.get(
      `${this.ROLETYPE_URL}GetRoleType_byRoleId/`+RId
    )
  }

  UpdateRoleTypeByRId(roleType:RoleType):any{
    return this.Http.put(
      `${this.ROLETYPE_URL}SP_UpdateRoleType`, roleType
    )
  }
}
