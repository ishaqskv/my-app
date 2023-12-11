import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard', canActivate:[AuthenticationGuard], component: DashboardComponent, children: [
      { path: 'aboutcompany', component: AboutCompanyComponent },
      { path: 'createemployees', component: CreateEmployeeComponent },
      { path: 'allemployees', component: AllEmployeesComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
