import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    username:any;
    password:any;
    reqpwd:any;
    loginForm:FormGroup=new FormGroup({});
    constructor(private router:Router,private fb:FormBuilder) {
      this.loginForm=this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required],
      })
    }
    checkLogin(){
      this.reqpwd=this.loginForm.value.username.slice(0,3)+"123";
      if( this.loginForm.value.username=="admin" && this.loginForm.value.password=="admin123"){
        alert("admin login successful");
        this.router.navigateByUrl("/admin");
      }
      else if(this.loginForm.value.password==this.reqpwd){
        alert("user login succesful");
        this.router.navigateByUrl("/user");
      }
    }
}
