import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup ({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(private _loginService:LoginService, private _router:Router){}

  login(){
    console.log(this.loginForm);

    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("Login success");
        //store
        localStorage.setItem("token",data.token);
        //go to dashboard, eve.holt@reqres.in cityslicka
        this._router.navigateByUrl("/dashboard");
      },
      (err:any)=>{
        alert("Invalid credentials");
      }
    )
  }

}
