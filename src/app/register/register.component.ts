import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {RegisterService} from "./register.service";

@Component({
  templateUrl: './register.component.html',
  selector:'register'
})
export class RegisterComponent {

  public form:FormGroup;
  public fname:AbstractControl;
  public lname:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public cpassword:AbstractControl;
  public submitted:boolean = false;

  constructor(private fb:FormBuilder,private router:Router, private service:RegisterService) {
    this.form = fb.group({
      'fname': ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])\w{2,}$/)])],
      'lname': ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])\w{3,}$/)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/)])],
      'cpassword': ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/)])]
    });
    this.fname= this.form.controls['fname'];
    this.lname= this.form.controls['lname'];
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
    this.cpassword = this.form.controls['cpassword'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;

  }

}
