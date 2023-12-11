import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { FormArray, FormControl, FormGroup, FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateemployeesService {

  public employeesForm:FormGroup = new FormGroup({
    name: new FormControl(),
    company: new FormControl(),
    role: new FormControl(),
    email: new FormControl(),
    package: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
      addresLane: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl()
    }),
    hikes: new FormArray([])
  })

  get hikesFromArray(){
    return this.employeesForm.get('hikes') as FormArray;
  }

  add(){
    this.hikesFromArray.push(
      new FormGroup({
        year: new FormControl(),
        percentage: new FormControl()
      })
    )
  }

  private baseUrl:string = 'https://6572df5d192318b7db412dfe.mockapi.io/employees'


  constructor(private _employeeService:EmployeeService) { }


}
