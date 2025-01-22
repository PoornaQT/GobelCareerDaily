export class MonthlyBudget {
    MBId: number = 0;
    PONumber: number = 0;
    MonthName: string = '';
    MonthId: number = 2;
    POAmount:  string = '';
    InvoicedAmount:  string = '';
    InvoicedOn:  string = '';;
    IsActive: boolean = true;
}  

export class PoNumberDetails {
    BId: number = 0;
    CompanyName!: string;
    FiscalYearName!: string;
    ProjectName!: string;
    HiringManager!: string;
    PONumber!: number;
    Type!: string;
    BDMName!: string;
    EmpCount!: number;
}