import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup
  submitted=false; // this means when we first load our page form is not submitted as it is set to false at first
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginform = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2})+[.]([a-zA-Z]{3})+$')]],
      password: ['', [Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]],
      confirmpassword:['', [Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]]
    })
  }
  onSubmit() {
    // this.submitted=true;
    // if(this.loginform.valid){
    //   console.log(this.loginform.value)
    // }

  }

  login(){
    console.log(this.loginform.value)
  }

 }
