import { Component, OnInit } from '@angular/core';
import { RoleType } from '../../../../Models/RoleType';
import { RoleTypeService } from '../../../../Services/RoleType/role-type.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-manage-role',
  templateUrl: './manage-role.component.html',
  styleUrl: './manage-role.component.css'
})
export class ManageRoleComponent implements OnInit {

  roleTypeList: RoleType[] = [];
  roleTypedata: RoleType = new RoleType();
  roleTypeInlinedata: RoleType = new RoleType();
  EditIndex: number | null = null

  constructor(
    private roleTypeService: RoleTypeService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.GetRoleType();
  }

  navigateToManage(): void {
    this.route.navigate(['/manage']);
  }
  GetRoleType(): any {
    debugger
    this.roleTypeService.GetRoleType().subscribe({
      next: (responce: any) => {
        try {
          if (responce.StatusCode === 200) {
            this.roleTypeList = responce.Data;
            this.roleTypedata = new RoleType();
          }
          else {
            alert(responce.Message);
          }
        }
        catch (err: any) {
          console.log("HTTP Error RoleType :", err.message);
        }
      },
      error: (err: any) => {
        console.log("ERROR :", err.message);
      }
    });
  }

  DeleteRoleType(RId: number): any {
    const confirmed = confirm("Do you want to delete RoleType details? Are you sure?");
    if (confirmed) {

      this.roleTypeService.DeleteRoleType(RId).subscribe({
        next: (responce: any) => {
          try {
            if (responce.StatusCode === 200) {
              // this.roleTypedata = responce.Data;
              this.GetRoleType();
            }
            else {
              alert(responce.Message);
            }
          }
          catch (err: any) {
            console.log("HTTP Error RoleType :", err.message);
          }
        },
        error: (err: any) => {
          console.log("ERROR :", err.message);
        }
      });
    }
  }


  AddRoleType(): any {
    this.roleTypeService.AddRoleType(this.roleTypedata).subscribe({
      next: (responce: any) => {
        try {
          if (responce.StatusCode === 200) {
            this.roleTypedata = responce.Data;
            this.GetRoleType();
          }
          else {
            alert(responce.Message);
          }
        }
        catch (err: any) {
          console.log("HTTP Error RoleType :", err.message);
        }
      },
      error: (err: any) => {
        console.log("ERROR :", err.message);
      }
    });
  }

  EditRoleData(Index: number, RId: number) {
    this.roleTypeService.GetRoleTypeByRId(RId).subscribe({
      next: (responce: any) => {
        try {
          if (responce.IsSuccess) {
            this.roleTypeInlinedata = responce.Data;
            this.EditIndex = Index;
            // this.roleTypedata = this.roleTypeList[Index];
          }
          else {
            alert(responce.Message);
          }
        }
        catch (error: any) {
          console.log("HTTP Error RoleType :", error.message);
        }
      },
      error: (err: any) => {
        console.log("ERROR :", err.message);
      }
    })
  }

  CanCelEdit() {
    this.EditIndex = null
  }

  UpdateRoleTypeFields() {
    this.roleTypeService.UpdateRoleTypeByRId(this.roleTypeInlinedata).subscribe({
      next: (responce: any) => {
        try {
          if (responce.IsSuccess) {
            this.GetRoleType();
            this.EditIndex = null;
            alert(responce.Message);
          }
          else {
            alert(responce.Message);
          }
        }
        catch (error: any) {
          console.log(error.message);
        }
      }
    })
  }

}
