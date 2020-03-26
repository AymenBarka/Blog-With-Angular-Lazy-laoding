import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registration: any[];
  submitted = false;
  verif = false;
  constructor( private router: Router) { }
  ngOnInit() {
    this.verif = false;
    this.registration = JSON.parse(localStorage.getItem('listeUsers'));
    this.registerForm = new FormGroup({
      title: new FormControl('', Validators.required),
      userName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),

    });

    
    this.getInformation();


  }
  get f() { return this.registerForm.controls; }
  onSubmit() {

    this.submitted = true;
     if(this.registerForm.invalid){
       return;
     }else{
    if (this.registerForm.valid ) {
      if ( !this.registration) {
        this.registration = [];
      }
      this.registration.push(this.registerForm.value);
      localStorage.setItem('listeUsers', JSON.stringify(this.registration));
      this.router.navigateByUrl('/login');

    }
  }
  }
 verifUser() {
   if ( !this.registration) {
        this.registration = [];
      }
    for (let i = 0; i < this.registration.length; i++) {
      
      if (this.registration[i].userName == this.registerForm.value.userName) {
        this.verif = true;
       //this.registerForm.controls['userName'].setErrors({valid: false});
       alert("user existe")
      } else {
        this.verif = false;
        //this.registerForm.controls['userName'].updateValueAndValidity();
      }
    }
  }
  getInformation() {
    if (localStorage.getItem('listeUsers') === null) {
      this.registration = [];
    } else {
      this.registration = JSON.parse(localStorage.getItem('listeUsers'));
    }
  }

}
