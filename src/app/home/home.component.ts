import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, public authService: AuthServiceService) { }

  ngOnInit() {
  }
  logout(){
    this.authService.loggedIn=false;
    localStorage.setItem('indexConnecte',null);
    this.router.navigateByUrl('/login');  
  }
}
