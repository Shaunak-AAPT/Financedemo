import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationform!: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder, private user: UserService, private route: Router) { }

  ngOnInit(): void {
    this.registrationform = this.formbuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2})+[.]([a-zA-Z]{3})+$')]],
      password: ['', [Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]]    
    })
  }
  onSubmit() {
    this.submitted = true;
    if(this.registrationform.valid){
      console.log(this.registrationform.value);

      let payload ={
        first_name: this.registrationform.value.firstname, // leftside firstname is exactly same as that of backend API and rightside firstname i.e., ,firstName should be exact same as that of formcontrolname in .html file or same as written above in ngonit 
        last_name: this.registrationform.value.lastname,
        username: this.registrationform.value.username,
        email: this.registrationform.value.email,
        password: this.registrationform.value.password
      }

      this.user.userRegister(payload).subscribe((response: any) => {    //subscribe is a method from observable
        console.log(response);
        this.route.navigateByUrl('/login');
      })
    } else {
      console.log("enter data");
    }

  }
  
  register(){

    
    console.log(this.registrationform.value)
  }


}
