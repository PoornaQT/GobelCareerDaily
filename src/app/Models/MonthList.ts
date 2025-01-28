


export class MonthEmpDetails {
    BId: number = 0;
    CompanyName!: string;
    FiscalYearName!: string;
    PId: number = 0;
    ProjectName!: string;
    HiringManager!: string;
    PONumber!: number;
    Type!: string;
    BDMName!: string;
    Hours: string = "0 hrs";
}


export class EmployeeList {
    EId: number = 0;
    EmployeeName !: string;
    PONumber !: number;
    MonthId: number = 0;
    MonthName!: string;
    Hours: string = '0';
    IsActive: boolean = true;

}