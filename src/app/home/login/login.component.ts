import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  connected = false;
  title: string;

  constructor(private router:Router, private authService: AuthServiceService) { }

  ngOnInit() {
    this.loginForm= new FormGroup({
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('', [Validators.required, Validators.minLength(8) ]),
    });

    
  }
  onSubmit(){
    let tabUsers = JSON.parse(localStorage.getItem('listeUsers'))
    for (let i = 0; i < tabUsers.length; i++) {
      if (tabUsers[i].email === this.loginForm.value.email && tabUsers[i].password === this.loginForm.value.password) {
         this.connected=true;
        this.router.navigateByUrl('/profile');
        localStorage.setItem('indexConnecte', JSON.stringify(i));
        this.authService.loggedIn = true;
      }
      else {
        this.title="vérifier vos parametres";
        this.connected=false;
      }

    }

  }

}
