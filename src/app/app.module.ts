import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingDataComponent } from './Components/Billing/BillingData/billing-data/billing-data.component';
import { TopnavComponent } from './Components/HomePage/TopNav/topnav/topnav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MonthlyBudgetComponent } from './Components/Billing/MonthlyBudget/monthly-budget/monthly-budget.component';
import { AddEmployeeComponent } from './Components/Employees/AddEMployee/add-employee/add-employee.component';
import { MonthlyInVoiceComponent } from './Components/Billing/MonthlyInVoice/monthly-in-voice/monthly-in-voice.component';
import { BottomComponent } from './Components/HomePage/Bottom/bottom/bottom.component';
import { ManageComponent } from './Components/Manage/ManageSidBar/manage/manage.component';
import { ManageProjectComponent } from './Components/Manage/ManageProject/manage-project/manage-project.component';
import { ManageVenderComponent } from './Components/Manage/ManageVender/manage-vender/manage-vender.component';
import { ManageClientComponent } from './Components/Manage/ManageClient/manage-client/manage-client.component';
import { ManageRoleComponent } from './Components/Manage/ManageRole/manage-role/manage-role.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingDataComponent,
    TopnavComponent,
    MonthlyBudgetComponent,
    AddEmployeeComponent,
    MonthlyInVoiceComponent,
    BottomComponent,
    ManageComponent,
    ManageProjectComponent,
    ManageVenderComponent,
    ManageClientComponent,
    ManageRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    
   
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
