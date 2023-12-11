import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  public userForm:FormGroup = new FormGroup ({ 
    name: new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required, Validators.min(0),Validators.max(100)]),
    phone: new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)])
    }),
    cards: new FormArray([]),
    type: new FormControl(),
    busFee: new FormControl(),
    hostelFee: new FormControl()
  })

  get cardsFromArray(){
    return this.userForm.get('cards') as FormArray
  }

  add(){
    this.cardsFromArray.push(
      new FormGroup({
        no: new FormControl(),
        expiry: new FormControl(),
        cvv: new FormControl(null, [Validators.required])
      })
    )
  }

  delete(i:number){
    this.cardsFromArray.removeAt(i);
  }

  submit(){
    console.log(this.userForm);
  }
}
