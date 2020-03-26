import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  index: any;
  liste: any[];
  registerForm: FormGroup;


  constructor() { }

  ngOnInit() {
    this.index = localStorage.getItem('indexConnecte')
    this.liste = JSON.parse(localStorage.getItem('listeUsers'))
    this.registerForm = new FormGroup({
      title: new FormControl(this.liste[this.index].title, [Validators.required]),
      userName: new FormControl(this.liste[this.index].userName, [Validators.required]),
      email: new FormControl(this.liste[this.index].email, [Validators.required]),
      password: new FormControl(this.liste[this.index].password, [Validators.required]),
    });

  }
  onSubmit(){
    this.liste[this.index]= this.registerForm.value;
    localStorage.setItem('listeUsers', JSON.stringify(this.liste));
  }

}
