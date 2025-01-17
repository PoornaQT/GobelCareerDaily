import { Component, OnInit } from '@angular/core';
import { Vender } from '../../../../Models/vender';
import { VenderService } from '../../../../Services/Vender/vender.service';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-manage-vender',
  templateUrl: './manage-vender.component.html',
  styleUrl: './manage-vender.component.css'
})
export class ManageVenderComponent implements OnInit {

  venderList: Vender[] = [];
  venderData: Vender = new Vender();
  venderInLineData: Vender = new Vender();

  EditIndex: number | null = null;
  constructor(private venderserivce: VenderService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.GetVenders();
  }

  navigateToManage(): void {
    this.route.navigate(['/manage']);
  }
  GetVenders(): any {
    this.venderserivce.GetVenders().subscribe({
      next: ((responce: any) => {
        try {
          if (responce.StatusCode === 200) {
            this.venderList = responce.Data;
          }
          else {
            alert(responce.Message);
          }
        }
        catch (err: any) {
          console.log("HTTP Error Vender :", err.message);
        }
      })
    });
  }

  DeleteRoleType(RId: number): any {
    const confirmed = confirm("Do you want to delete Vender details? Are you sure?");
    if (confirmed) {

      this.venderserivce.DeleteVender(RId).subscribe({
        next: (responce: any) => {
          try {
            debugger
            if (responce.StatusCode === 200) {
              // this.venderData = responce.Data;
              this.GetVenders();
            }
            else {
              alert(responce.Message);
            }
          }
          catch (err: any) {
            console.log("HTTP Error Vender :", err.message);
          }
        },
        error: (err: any) => {
          console.log("ERROR :", err.message);
        }
      });
    }
  }


  // 

  AddVender(): any {
    debugger
    if (this.venderData.VenderName != "")
      this.venderserivce.AddVender(this.venderData).subscribe({
        next: (responce: any) => {
          try {
            if (responce.StatusCode === 200) {
              this.GetVenders();
              alert(responce.Message);
              this.venderData = new Vender();
            }
            else {
              alert(responce.Message);
              console.log("Error:", responce.Message);
            }
          }
          catch (err: any) {
            console.log("HTTP Error RoleType :", err.message);
          }
        },
        error: (error: any) => {
          console.log("HTTP Error Project :", error.message);
          alert(error.message);
        }
      });
  }
  EditVender(index: number, VId: number) {
    this.venderserivce.GetVenderByVId(VId).subscribe({
      next: (responce: any) => {
        try {
          if (responce.IsSuccess) {
            this.EditIndex = index;
            this.venderInLineData = responce.Data;
          }
          else {
            alert(responce.Message);
            console.log("Error:", responce.Message);
          }
        }
        catch (err: any) {
          console.log("HTTP Error RoleType :", err.message);
        }
      },
      error: (error: any) => {
        console.log("HTTP Error Project :", error.message);
        alert(error.message);
      }
    });
  }

  UpdateVender(): any {
    this.venderserivce.UpdateVender(this.venderInLineData).subscribe({
      next: (responce: any) => {
        try {
          if (responce.IsSuccess) {
            this.EditIndex = null;
            this.GetVenders();
            alert(responce.Message);
            this.venderInLineData = new Vender();
          }
          else {
            alert(responce.Message);
            console.log("Error:", responce.Message);
          }
        }
        catch (err: any) {
          console.log("HTTP Error RoleType :", err.message);
        }
      },
      error: (error: any) => {
        console.log("HTTP Error Project :", error.message);
        alert(error.message);
      }
    });
  }

  CancelEdit(){
    this.EditIndex = null;
  }

}
