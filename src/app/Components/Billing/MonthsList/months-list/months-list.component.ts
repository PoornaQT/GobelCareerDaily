import { Component, OnInit } from '@angular/core';
import { EmployeeList, MonthEmpDetails } from '../../../../Models/MonthList';
import { ActivatedRoute, Router } from '@angular/router';
import { MonthService } from '../../../../Services/Month/month.service';
import { PrefixNot } from '@angular/compiler';

@Component({
  selector: 'app-months-list',
  templateUrl: './months-list.component.html',
  styleUrl: './months-list.component.css'
})
export class MonthsListComponent implements OnInit {

  constructor(private router: Router,
    private activateRouter: ActivatedRoute,
    private monthService: MonthService
  ) { }


  editingIndex: number | null = null;
  PonumberDetials: MonthEmpDetails = new MonthEmpDetails();
  employeeList: EmployeeList[] = [];
  monthlyEmployees: EmployeeList[] = [];
  MonthId: number = 0;
  PoNumber: number = 0;
  ActiveBool: boolean = false;
  TotalCount: number = 0;



  ngOnInit(): void {
    this.ConvertingBId();
  }

  ConvertingBId() {
    this.activateRouter.paramMap.subscribe(params => {
      const encodedBId = params.get("BId");
      const encodedMId = params.get("MId");
      if (encodedBId && encodedMId) {
        const decodeBId = atob(encodedBId);
        const decodeMId = atob(encodedMId);
        const numaricBId = Number(decodeBId);
        this.MonthId = Number(decodeMId);
        this.GetMonthlyListByBId(numaricBId);
      }
    })
  }


  GoTomonthlyBudget() {
    const encoded = this.PonumberDetials.BId;
    const encodedPONumber = this.PonumberDetials.PONumber;
    const encodedBId = btoa(encoded.toString());
    const encodedId = btoa(encodedPONumber.toString());
    this.router.navigate(['/monthlyBudget', encodedBId, encodedId]);
  }

  // To display data in top of table
  GetMonthlyListByBId(BId: number) {
    debugger
    this.monthService.GetMonthDetails_By_BillingId(BId).subscribe({
      next: (response: any) => {
        if (response.StatusCode === 200 || response.StatusCode === 201) {
          this.PonumberDetials = response.Data;
          this.PoNumber = response.Data.PONumber;
          this.GetEmployeesListByPId(response.Data.PId);
        } else {
          console.error("Error retrieving data: ", response.Message);
        }
      },
      error: (err: any) => {
        console.error("Error occurred: ", err);
      }
    });
  };

  // Table Display data
  GetEmployeesListByPId(PId: number) {
    debugger
    this.monthService.GetEmployeesListByPId(PId, this.MonthId, this.PoNumber).subscribe({
      next: (response: any) => {
        if (response.IsSuccess) {
          this.employeeList = response.Data;
          this.totalInvoicedAmount();

        } else {
          console.error("Error retrieving data: ", response.Message);
        }
      },
      error: (err: any) => {
        console.error("Error occurred: ", err);
      }
    });
  };


  AddMonthlyEmployeesList() {
    debugger
    this.employeeList.forEach((employee: any) => {
      employee.IsActive = true;
    });
    this.monthService.AddMonthlyEmployeesList(this.employeeList).subscribe({
      next: (response: any) => {
        if (response.IsSuccess) {
          // this.employeeList = response.Data;
          this.totalInvoicedAmount();
          alert(response.Message);
        } else {
          console.error("Error retrieving data: ", response.Message);
        }
      },
      error: (err: any) => {
        console.error("Error occurred: ", err);
      }
    });
  }

  totalInvoicedAmount(): any {
    this.TotalCount = this.employeeList && this.employeeList.length > 0
      ? this.employeeList.reduce((sum, row) => {
        const hours = parseInt(row.Hours, 10);
        return sum + (isNaN(hours) ? 0 : hours);
      }, 0)
      : 0;
  }


  // get totalInvoicedAmount(): any {
  //   return this.employeeList.reduce((sum, row) =>{
  //     const hours = parseInt(row.Hours,10);
  //     return  sum + (isNaN(hours  ) ? 0 : hours);
  //   },0);
  // }

}
