import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.scss']
})
export class AllEmployeesComponent {
  public employees:any = [];
  constructor(private _employeeService:EmployeeService){

    _employeeService.getEmployees().subscribe(
      (data:any)=>{
        this.employees = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )

    
  }
}
