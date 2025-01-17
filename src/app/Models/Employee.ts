
export class Employee {
    FullName !: string;
    Email !: string;
    Contact_number_Primary !: string;
    Contact_number_Alternative !: string;
    Current_Location !: string;
    BirthDate !: Date;
    CompanyId !: number;
    ProjectId : number=0;
    ClientId: number = 0;
    EmployeeTypeId !: number;
    Vender: number = 0;
    HiringManager !: string;
    StartDate!: Date;
    EndDate!: Date;
    skills !: string;
    BillableId: number = 0;
    RoleType: number = 0;
    OnBoardingStatusId: number = 0;
    Experence !: string;
    IsActive!: boolean;
}