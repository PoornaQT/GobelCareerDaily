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
// import { ManageProjectComponent } from './Components/Manage/ManageProject/manage-project/manage-project.component';

const routes: Routes = [
  {
    path: 'topnav', component: TopnavComponent
  },
  {
    path: 'billingData', component: BillingDataComponent
  },
  {
    path:'monthlyBudget/:BId/:POId' ,component:MonthlyBudgetComponent
  },
  {
    path:'addEmployee', component:AddEmployeeComponent
  },
  {
    path:'montlyInvoice', component:MonthlyInVoiceComponent
  },
  {
    path:'manage',component:ManageComponent
  },
  {
    path:'manageProject', component:ManageProjectComponent
  },
  {
    path:'manageClient',component:ManageClientComponent
  },
  {
    path:'manageVender',component:ManageVenderComponent
  },
  {
    path:'manageRole',component:ManageRoleComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restores scroll position
    }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
