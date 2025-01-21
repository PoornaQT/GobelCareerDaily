import { Component, OnInit } from '@angular/core';
import { BillingDataService } from '../../../../Services/Billing/billing-data.service';
import { NewBilling, Billing } from '../../../../Models/Billing';
import { CompanyService } from '../../../../Services/Company/company.service';
import { Company } from '../../../../Models/Company';
import { YearService } from '../../../../Services/Year/year.service';
import { Year } from '../../../../Models/Year';
import { FiscialYear } from '../../../../Models/FiscialYear';
import { FiscialYearService } from '../../../../Services/FiscialYear/fiscial-year.service';
import { Month } from '../../../../Models/Month';
import { MonthService } from '../../../../Services/Month/month.service';
import { ProjectServiceService } from '../../../../Services/Project/project-service.service';
import { Project } from '../../../../Models/Project';
import { Router } from '@angular/router';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-billing-data',
  templateUrl: './billing-data.component.html',
  styleUrl: './billing-data.component.css'
})
export class BillingDataComponent implements OnInit {

  constructor(private billingService: BillingDataService,
    private companyService: CompanyService,
    private yearService: YearService,
    private fiscialYearSerivce: FiscialYearService,
    private monthSerivce: MonthService,
    private projectSeivce: ProjectServiceService,
    private route: Router
  ) { }

  Billing: Billing = new Billing();
  BillingList: Billing[] = [];
  CompanyList: Company[] = [];
  YearsList: Year[] = [];
  FiscialYearsList: FiscialYear[] = [];
  MonthList: Month[] = [];
  projectList: Project[] = [];
  newBillingData: NewBilling = new NewBilling()

  SelectedCompany: number = 0;
  SelectedYear: number = 0;
  SelectedFiscialYear: number = 0;
  SelectedMonth: string = '0';
  SelectedStatus: string = '0';

  Add_Edit !: boolean;

  ngOnInit(): void {
    this.GetBillingDataFiter();
    this.GetCompanies();
    this.GetYears();
    this.GetFiscialYears();
    this.GetMonths();
    this.GetProjects();
  }

  AddFields: boolean = false;
  searchQuery: string = '';
  Actions !: boolean[];

  GetBillingDataFiter(): any {
    debugger
    this.billingService.GetBillingDataFiter(this.SelectedCompany, this.SelectedYear, this.SelectedFiscialYear).subscribe({
      next: (responce: any) => {
        if (responce.IsSuccess) {
          this.BillingList = responce.Data;
        }
        else {
          alert(responce.Message);
        }
      }
    })
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

  GetYears(): any {
    this.yearService.GetYears().subscribe({
      next: (responce: any) => {
        if (responce.StatusCode == 200 || 201) {
          this.YearsList = responce.Data;
        }
      },
      error: (error: any) => {
        console.log("HTTp Error:", error.message);
      },
    })
  }


  GetMonths(): any {
    this.fiscialYearSerivce.GetFiscialYears().subscribe({
      next: (responce: any) => {
        if (responce.StatusCode == 200 || 201) {
          this.FiscialYearsList = responce.Data;
        }
      },
      error: (error: any) => {
        console.log("HTTP Error :", error.message);
      }
    });
  };


  GetFiscialYears(): any {
    this.monthSerivce.Getmonth().subscribe({
      next: (responce: any) => {
        if (responce.StatusCode == 200 || 201) {
          this.MonthList = responce.Data;
        }
      },
      error: (error: any) => {
        console.log("HTTP Error:", error.message);
      }
    });
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
        console.log("HTTP Error :", error.message);
      }
    });
  };

  SubmitBillingData(): any {
    this.newBillingData.IsActive = Boolean(this.newBillingData.IsActive);
    // console.log("New Billing Data :", this.newBillingData);
    this.AddFields = !this.AddFields;
  };

  GetPONumberDetails(BId: number, POId: number) {
    debugger
    const encodedId = btoa(BId.toString());
    const encodedPONumberId = btoa(POId.toString());
    this.route.navigate(['/monthlyBudget', encodedId, encodedPONumberId]);
  };


  DeleteBillingdata(BId: number): any {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      this.billingService.deleteBillingData(BId).subscribe({
        next: (responce: any) => {
          if (responce.StatusCode === 200 || responce.StatusCode === 201) {
            alert(responce.Message);
            this.GetBillingDataFiter();
          }
          else {
            alert(responce.Message);
            this.GetBillingDataFiter();
          }
        },
        error: (error: any) => {
          console.log("HTTP Error:", error.message);
        }
      })
    }
  }


  GetBillingDataByBillingId(BId: number): any {
    debugger
    this.billingService.GetBillingDataByBillingId(BId).subscribe({
      next: (response: any) => {
        if (response.StatusCode == 200) {
          this.Add_Edit = true
          this.AddFields = true;
          this.Billing = response.Data;
          // this.Billing.IsActive = response.Data.IsActive === true || response.Data.IsActive === 'true';
        }
        else {
          console.log("Somthing issue please try again...");
        }

      },
      error: (error: any) => {
        console.log(error.message)
      }
    })
  };


  UpdateBillingData(): void {
    console.log("UpdatingData :", this.Billing);
    debugger
    this.billingService.updateBillingData(this.Billing).subscribe({
      next: (response: any) => {
        if (response.StatusCode === 200 || response.StatusCode === 201) {
          this.AddFields = !this.AddFields;
          this.GetBillingDataFiter();
          this.Add_Edit = false;
          alert(response.IsSucess || 'Billing data updated successfully.');
        } else {
          alert(response.Message || 'Failed to update billing data.');
          this.GetBillingDataFiter();
        }
      },
      error: (error: any) => {
        console.error('HTTP Error:', error.message);
        alert('An error occurred while updating the billing data.');
      }
    });
  }


  AddNewBilling() {

    this.AddFields = !this.AddFields;
    this.Add_Edit = false;
  }

  cleanFields(): any {
    this.Billing = new Billing();
    this.Add_Edit = false;
    this.AddFields = !this.AddFields;
  }

  details: any = [
    { "count": 340, "status": "Active Employee" },
    { "count": 263, "status": "W2" },
    { "count": 77, "status": "C2C" },
    { "count": 3, "status": "OnBench" },
    { "count": 433, "status": "InProgress" },
    { "count": 40, "status": "Resigned" },
    { "count": 52, "status": "Project Completed" }
  ];

}


