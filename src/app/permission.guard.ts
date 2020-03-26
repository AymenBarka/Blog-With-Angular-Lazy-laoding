import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './home/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private login : LoginComponent){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean  {
    
    if(localStorage.getItem('indexConnecte') !== 'null'){
      return true;
    } else{
     alert('You are not allowed to view this page.');
     return false;
    }
     
  }
  
}
