import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../Models/Clients';
import { ClientService } from '../../../../Services/Client/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrl: './manage-client.component.css'
})
export class ManageClientComponent implements OnInit {

  clientList: Client[] = [];
  clientdata: Client = new Client();
  clientInLinedata: Client = new Client();
  EditIndex: number | null = null;

  constructor(private clientservice: ClientService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.Getclients();
  }

  navigateToManage(): void {
    this.route.navigate(['/manage']);
  }
  Getclients(): any {
    this.clientservice.GetClients().subscribe({
      next: (responce: any) => {
        try {
          if (responce.StatusCode === 200) {
            this.clientList = responce.Data;
          }
          else {
            alert(responce.Message);
          }
        }
        catch (err: any) {
          console.log("HTTP Error Cleint :", err.message);
        }
      },
      error: (error: any) => {
        console.log("HTTP Error Client :", error.message);
      }
    });
  }

  DeleteClient(CId: number): any {
    const confirmed = window.confirm("Are you sure to Delete Client ...!");
    if (confirmed) {

      this.clientservice.DeleteClient(CId).subscribe({
        next: (responce: any) => {
          if (responce.StatusCode === 200) {
            this.Getclients();
          }
          else {
            console.log("Error:", responce.StatusCode);
            console.log("Error:", responce.Message);
          }
        },
        error: (error: any) => {
          console.log("HTTP Error Client :", error.message);
        }
      });
    }
  };

  AddClient(): any {
    debugger
    this.clientservice.AddClient(this.clientdata).subscribe({
      next: (responce: any) => {
        try {
          if (responce.StatusCode === 200) {
            this.Getclients();
            alert(responce.IsSuccess);
            this.clientdata = new Client();
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

  UpdateClient(): any {
    debugger
    this.clientservice.UpdateClient(this.clientInLinedata).subscribe({
      next: (responce: any) => {
        try {
          debugger
          if (responce.StatusCode === 200) {
            this.Getclients();
           this.EditIndex=null;
            // this.clientInLinedata = new Client();
            alert(responce.Message);
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

  GetClientByCId(index: number, CId: number): any {
    debugger
    this.clientservice.GetClientByCId(CId).subscribe({
      next: (responce: any) => {
        try {
          if (responce.StatusCode === 200) {
            this.EditIndex = index;
            this.clientInLinedata = responce.Data;
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

  CancelEdit() {
    this.EditIndex = null;
  }
}
