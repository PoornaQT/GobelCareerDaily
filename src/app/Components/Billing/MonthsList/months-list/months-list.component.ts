import { Component, OnInit } from '@angular/core';
import { EmployeeList, MonthEmpDetails } from '../../../../Models/MonthList';
import { ActivatedRoute, Router } from '@angular/router';
import { MonthService } from '../../../../Services/Month/month.service';

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
 employeeList: EmployeeList[]=[];


  ngOnInit(): void {
    this.ConvertingBId();
  }

  ConvertingBId() {
    this.activateRouter.paramMap.subscribe(params => {
      const encodedId = params.get("BId");
      if (encodedId) {
        const decodeId = atob(encodedId);
        const numaricBId = Number(decodeId);
        this.GetMonthlyListByBId(numaricBId);
      }
    })
  }


  GoTomonthlyBudget() {
    const encoded = this.PonumberDetials.BId;
    const encodedPONumber = this.PonumberDetials.PONumber;
    const encodedBId = btoa(encoded.toString());
    const encodedId = btoa(encodedPONumber.toString());
    this.router.navigate(['/monthlyBudget',encodedBId,encodedId]);
  }


  GetMonthlyListByBId(BId: number) {
    debugger
    this.monthService.GetMonthDetails_By_BillingId(BId).subscribe({
      next: (response: any) => {
        if (response.StatusCode === 200 || response.StatusCode === 201) {
          this.PonumberDetials = response.Data;
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

  GetEmployeesListByPId(PId: number) {
    this.monthService.GetEmployeesListByPId(PId).subscribe({
      next: (response: any) => {
        if (response.IsSuccess) {
          this.employeeList = response.Data;
        } else {
          console.error("Error retrieving data: ", response.Message);
        }
      },
      error: (err: any) => {
        console.error("Error occurred: ", err);
      }
    });
  };


}
