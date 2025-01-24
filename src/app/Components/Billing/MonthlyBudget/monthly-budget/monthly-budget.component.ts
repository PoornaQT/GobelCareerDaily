import { Component, OnInit } from '@angular/core';
import { PoNumberDetails } from '../../../../Models/MonthlyBudget';
import { ActivatedRoute, Router } from '@angular/router';
import { BillingDataService } from '../../../../Services/Billing/billing-data.service';
import { MonthlyBudget } from '../../../../Models/MonthlyBudget';
import { MonthlyBudgetService } from '../../../../Services/MonthlyBudget/monthly-budget.service';

@Component({
  selector: 'app-monthly-budget',
  templateUrl: './monthly-budget.component.html',
  styleUrl: './monthly-budget.component.css'
})
export class MonthlyBudgetComponent implements OnInit {

  updateConditon!: boolean
  BId: number = 0;
  PonumberDetials: PoNumberDetails = new PoNumberDetails();

  monthyBudgetlist: MonthlyBudget[] = [];
  monthlyBudgetData: MonthlyBudget = new MonthlyBudget();
  editingIndex: number | null = null;

  constructor(private activatedRoute: ActivatedRoute,
    private billingService: BillingDataService,
    private monthlyBudingService: MonthlyBudgetService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.converting();
  };

  converting(): any {
    this.activatedRoute.paramMap.subscribe(params => {
      const encodedId = params.get('BId');
      const encodedPONumberId = params.get('POId');
      if (encodedId && encodedPONumberId) {
        const decodedId = atob(encodedId);
        const decodedPONumberId = atob(encodedPONumberId);
        const numericId = Number(decodedId);
        const numericPONumberId = Number(decodedPONumberId);
        this.GetPonumberDetails(numericId);
        this.GetMonthlyBudgetByPONumber(numericPONumberId)
      }
    });
  }
  GetPonumberDetails(BId: number): any {
    debugger
    this.billingService.GetPonumberDetails(BId).subscribe({
      next: (response: any) => {
        if (response.StatusCode === 200 || response.StatusCode === 201) {
          this.PonumberDetials = response.Data;
        } else {
          console.error("Error retrieving data: ", response.Message);
        }
      },
      error: (err: any) => {
        console.error("Error occurred: ", err);
      }
    });
  };

  GetMonthlyBudgetByPONumber(POId: number): any {
    debugger
    this.monthlyBudingService.GetMonthlyBudgetByPONumber(POId).subscribe({
      next: (response: any) => {
        try {
          if (response.StatusCode === 200) {
            this.monthyBudgetlist = response.Data;
          } else {
            console.error("Error retrieving data: ", response.Message);
          }
        }
        catch (error: any) {
          console.error("Error Something went wrong : ", response.Message);
        }
      },
      error: (err: any) => {
        console.error("Error occurred: ", err);
      }
    });
  }


  DeleteMonthlyBudgetById(MBId: number): any {
    debugger
    const confirmed = window.confirm("Are you sure to Delete monthly Budget ?..");
    if (confirmed) {
      this.monthlyBudingService.DeleteMonthlyBudget(MBId).subscribe({
        next: (response: any) => {
          try {
            if (response.StatusCode === 200) {
              // this.monthyBudgetlist = response.Data;
              this.converting();
              alert(response.IsSuccess);
            } else {
              console.error("Error retrieving data: ", response.Message);
            }
          }
          catch (error: any) {
            console.error("Error Something went wrong : ", response.Message);
          }
        },
        error: (err: any) => {
          console.error("Error occurred: ", err);
        }
      });
    }
  }


  EditmonthlyFields(index: number) {
    this.editingIndex = index;
  }

  UpdateMonthlyFields() {
    debugger
    this.monthlyBudingService.UpdateMonthlyBudget(this.monthlyBudgetData).subscribe({
      next: ((response: any) => {
        if (response.IsSuccess) {
          alert(response.Message);
          this.monthlyBudgetData = new MonthlyBudget();
          this.editingIndex = null;
          this.converting();
        }
        else {
          alert(response.Message);
        }
      })
    })
  }

  MonthlyBudgetByMBId(MBId: number, index: number): any {
    this.monthlyBudingService.MonthlyBudgetByMBId(MBId).subscribe({
      next: (response: any) => {
        try {
          if (response.StatusCode === 200) {
            this.editingIndex = index;
            this.monthlyBudgetData = response.Data;
            // this.converting();
            // alert(response.IsSuccess);
          } else {
            this.converting();
            console.error("Error retrieving data: ", response.Message);
          }
        }
        catch (error: any) {
          console.error("Error Something went wrong : ", response.Message);
        }
      },
      error: (err: any) => {
        console.error("Error occurred: ", err);
      }
    });

  }
  CancelEdit() {
    this.editingIndex = null;
  }

  get totalPOAmount(): number {
    return this.monthyBudgetlist.reduce((sum, row) => sum + parseInt(row.POAmount, 10), 0);
  }


  get totalInvoicedAmount(): number {
    return this.monthyBudgetlist.reduce((sum, row) => sum + parseInt(row.InvoicedAmount, 10), 0);
  }

  goToMonthListPage(BId : number, MId:number) {
    const encodedBId = btoa(BId.toString());
    const encodedMId = btoa(MId.toString());
    this.router.navigate(['/monthList',encodedBId,encodedMId]);
  }
  BackToBillingData(){
    this.router.navigate(['/billingData'])
  }
}
