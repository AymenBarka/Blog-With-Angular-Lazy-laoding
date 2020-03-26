import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(private router:Router, public authService: AuthServiceService ) { }

  ngOnInit() {
   

    
  }


  logout(){
    this.authService.loggedIn=false;
    localStorage.setItem('indexConnecte',null);
    this.router.navigateByUrl('/login');  
  }
}
