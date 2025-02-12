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
import { MsalGuard } from '@azure/msal-angular';
// import { ManageProjectComponent } from './Components/Manage/ManageProject/manage-project/manage-project.component';

const routes: Routes = [
  {
    path: 'topnav', component: TopnavComponent,canActivate:[MsalGuard],
  },
  {
    path: 'billingData', component: BillingDataComponent,canActivate:[MsalGuard],
  },
  {
    path: 'monthlyBudget/:BId/:POId', component: MonthlyBudgetComponent,canActivate:[MsalGuard],
  },
  {
    path: 'monthList/:BId/:MId', component: MonthsListComponent,canActivate:[MsalGuard],
  },
  {
    path: 'addEmployee', component: AddEmployeeComponent,canActivate:[MsalGuard],
  },
  {
    path: 'login', component: LoginComponent,canActivate:[MsalGuard],
  },
  {
    path: 'monthlyInvoice', component: MonthlyInVoiceComponent,canActivate:[MsalGuard],
  },
  {
    path: 'appcomponent', component: AppComponent,canActivate:[MsalGuard],
  },
  {
    path: 'manage', component: ManageComponent,canActivate:[MsalGuard],
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
