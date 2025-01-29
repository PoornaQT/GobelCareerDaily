import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopnavComponent } from './Components/HomePage/TopNav/topnav/topnav.component';
import { BillingDataComponent } from './Components/Billing/BillingData/billing-data/billing-data.component';
import { MonthlyBudgetComponent } from './Components/Billing/MonthlyBudget/monthly-budget/monthly-budget.component';
import { AddEmployeeComponent } from './Components/Employees/AddEMployee/add-employee/add-employee.component';
import { MonthlyInVoiceComponent } from './Components/Billing/MonthlyInVoice/monthly-in-voice/monthly-in-voice.component';
import { ManageComponent } from './Components/Manage/ManageSidBar/manage/manage.component';
import { ManageProjectComponent } from './Components/Manage/ManageProject/manage-project/manage-project.component';
import { ManageClientComponent } from './Components/Manage/ManageClient/manage-client/manage-client.component';
import { ManageVenderComponent } from './Components/Manage/ManageVender/manage-vender/manage-vender.component';
import { ManageRoleComponent } from './Components/Manage/ManageRole/manage-role/manage-role.component';
import { MonthsListComponent } from './Components/Billing/MonthsList/months-list/months-list.component';
import { LoginComponent } from './Components/AuthComponent/login/login.component';
import { AppComponent } from './app.component';
// import { ManageProjectComponent } from './Components/Manage/ManageProject/manage-project/manage-project.component';

const routes: Routes = [
  {
    path: 'topnav', component: TopnavComponent
  },
  {
    path: 'billingData', component: BillingDataComponent
  },
  {
    path: 'monthlyBudget/:BId/:POId', component: MonthlyBudgetComponent
  },
  {
    path: 'monthList/:BId/:MId', component: MonthsListComponent
  },
  {
    path: 'addEmployee', component: AddEmployeeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'monthlyInvoice', component: MonthlyInVoiceComponent
  },
  {
    path: 'appcomponent', component: AppComponent
  },
  {
    path: 'manage', component: ManageComponent,
    children: [
      {
        path: 'manageProject', component: ManageProjectComponent
      },
      {
        path: 'manageClient', component: ManageClientComponent
      },
      {
        path: 'manageVender', component: ManageVenderComponent
      },
      {
        path: 'manageRole', component: ManageRoleComponent
      },
    ]
  },
  // {
  //   path: 'manageProject', component: ManageProjectComponent
  // },
  // {
  //   path: 'manageClient', component: ManageClientComponent
  // },
  // {
  //   path: 'manageVender', component: ManageVenderComponent
  // },
  // {
  //   path: 'manageRole', component: ManageRoleComponent
  // },
  // { path: '', redirectTo: '/manage/manageProject', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
