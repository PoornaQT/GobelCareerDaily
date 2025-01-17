import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../../../../Services/Project/project-service.service';
import { Project } from '../../../../Models/Project';
import { Company } from '../../../../Models/Company';
import { CompanyService } from '../../../../Services/Company/company.service';
import { VenderService } from '../../../../Services/Vender/vender.service';
import { Vender } from '../../../../Models/vender';
import { ClientService } from '../../../../Services/Client/client.service';
import { Client } from '../../../../Models/Clients';
import { EmployeeService } from '../../../../Services/Employee/employee.service';
import { EmployeeType } from '../../../../Models/EmployyeType';
import { error } from 'console';
import { EmployeeTypeService } from '../../../../Services/EmployeeType/employee-type.service';
import { RoleType } from '../../../../Models/RoleType';
import { RoleTypeService } from '../../../../Services/RoleType/role-type.service';
import { BillableService } from '../../../../Services/Billable/billable.service';
import { Billable } from '../../../../Models/Billable';
import { OnBoardingStatusService } from '../../../../Services/OnBoardingStatus/on-boarding-status.service';
import { OnBoardingStatus } from '../../../../Models/OnBoardingStatus';
import { Employee } from '../../../../Models/Employee';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  venderList: Vender[] = [];
  clientList: Client[] = [];
  projectList: Project[] = [];
  CompanyList: Company[] = [];
  employeeList: Employee[] = [];
  roleTypeList: RoleType[] = [];
  billableList: Billable[] = [];
  employeeTypeList: EmployeeType[] = [];
  onBoardingStatusList: OnBoardingStatus[] = [];



  constructor(
    private venderserivce: VenderService,
    private clientservice: ClientService,
    private companyService: CompanyService,
    private roleTypeService: RoleTypeService,
    private billableService: BillableService,
    private employeeService: EmployeeService,
    private projectSeivce: ProjectServiceService,
    private employeeTypeService: EmployeeTypeService,
    private onBoardingStatusService: OnBoardingStatusService,
  ) { }


  ngOnInit(): void {
    this.GetVender();
    this.Getclients();
    this.GetRoleType();
    this.GetBillable();
    this.GetProjects();
    this.GetCompanies();
    this.GetEmployeeTypes();
    this.GetOnBoardingStatus();
    this.ResetAddEmployee();
  }

  AddEmployee(employeeForm: NgForm): void {
    if (employeeForm.valid) {
      // Convert all required fields to proper types
      this.employee.BillableId = Number(this.employee.BillableId);
      this.employee.ClientId = Number(this.employee.ClientId);
      this.employee.CompanyId = Number(this.employee.CompanyId);
      this.employee.EmployeeTypeId = Number(this.employee.EmployeeTypeId);
      this.employee.OnBoardingStatusId = Number(this.employee.OnBoardingStatusId);
      this.employee.ProjectId = Number(this.employee.ProjectId);
      this.employee.RoleType = Number(this.employee.RoleType);
      this.employee.Vender = Number(this.employee.Vender);
      this.employee.IsActive = true;
  
      // Call the service to add employee
      this.employeeService.AddEmployeeDetails(this.employee).subscribe({
        next: (response: any) => {
          console.log(response);
          if (response.StatusCode === 200) {
            alert(response.Message);
            this.employee = new Employee(); // Reset the form
            employeeForm.resetForm(); // Reset Angular Form
          } else {
            alert(response.Message);
          }
        },
        error: (err: any) => {
          console.error('ERROR AddEmployee:', err.message);
        },
      });
    } else {
      Object.keys(employeeForm.controls).forEach((field) => {
        const control = employeeForm.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
  

  ResetAddEmployee() {
    this.employee = new Employee();
  }

  GetCompanies(): any {
    this.companyService.GetCompanies().subscribe({
      next: (responce: any) => {
        if (responce.StatusCode == 200 || responce.StatusCode == 201) {
          this.CompanyList = responce.Data;
        }
      },
      error: (error: any) => {
        console.error("HTTP Error :", error.message);
      }
    }
    );
  };

  GetProjects(): any {
    this.projectSeivce.GetProjects().subscribe({
      next: (responce: any) => {
        if (responce.StatusCode === 200 || 201) {
          this.projectList = responce.Data;
        }
        else {
          console.log("Error:", responce.StatusCode);
          console.log("Error:", responce.Message);
        }
      },
      error: (error: any) => {
        console.log("HTTP Error Project :", error.message);
      }
    });
  };


  GetVender(): any {
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

  GetEmployeeTypes(): any {
    this.employeeTypeService.GetEmployeeTypes().subscribe({
      next: (responce: any) => {
        try {
          if (responce.StatusCode === 200) {
            this.employeeTypeList = responce.Data;
          }
          else {
            alert(responce.Message);
          }
        }
        catch (err: any) {
          console.log("HTTP Error EmployeeType :", err.message);
        }
      },
      error: (err: any) => {
        console.log("ERROR :", err.message);
      }
    });
  }

  GetRoleType(): any {
    this.roleTypeService.GetRoleType().subscribe({
      next: (responce: any) => {
        try {
          if (responce.StatusCode === 200) {
            this.roleTypeList = responce.Data;
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


  GetBillable(): any {
    this.billableService.GetBillable().subscribe({
      next: (responce: any) => {
        try {
          if (responce.StatusCode === 200) {
            this.billableList = responce.Data;
          }
          else {
            alert(responce.Message);
          }
        }
        catch (err: any) {
          console.log("HTTP Error Billable :", err.message);
        }
      },
      error: (err: any) => {
        console.log("ERROR :", err.message);
      }
    });
  }

  GetOnBoardingStatus(): any {
    this.onBoardingStatusService.GetOnBoardingStatus().subscribe({
      next: (responce: any) => {
        try {
          if (responce.StatusCode === 200) {
            this.onBoardingStatusList = responce.Data;
          }
          else {
            alert(responce.Message);
          }
        }
        catch (err: any) {
          console.log("HTTP Error onBoardingStatus :", err.message);
        }
      },
      error: (err: any) => {
        console.log("ERROR :", err.message);
      }
    });
  }
}
