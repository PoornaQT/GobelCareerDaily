// export class Billing {
//     Bid!: number;
//     CompanyId!: number;
//     Year!: number;
//     FiscalYearId!: number;
//     ProjectId!: number;
//     Type!: string;
//     HiringManager!: string;
//     Bdmid!: number;
//     EmpCount!: number;
//     Ponumber!: number;
//     Poamount!: string;
//     InvoicedAmount!: string;
//     OpenAmount!: string;
//     LastUpdated!: Date;
// } 

export class Billing {
    BId!: number;
    CompanyId!: number;
    CompanyName!: string;
    Year!: number;
    YearName!: string;
    FiscalYearId!: number;
    FiscalYearName!: string;
    ProjectId!: number;
    ProjectName!: string;
    Type!: string;
    HiringManager!: string;
    Bdmid!: number;
    BDMName!: string;
    EmpCount!: number;
    PONumber!: number;
    POAmount!: string;
    InvoicedAmount!: string;
    OpenAmount!: string;
    LastUpdated!: Date;
    IsActive !: boolean;
}


export class NewBilling {
    CompanyId: number = 0;
    Ponumber: number = 0;
    FiscalYear: number = 0;
    ProjectId: number = 0;
    F_Year: boolean = false
    IsActive: boolean = false;
}

export class EmployeeStatus {
    Name !: string;
    Count!: number;
}



export class dropDownFilter {
    SelectedCompany: number = 0;
    SelectedYear: number = 0;
    SelectedFiscialYear: number = 0;
    SelectedMonth: number = 0;
    SelectedStatus: number = 1;
    SearchTerm: string='';
}