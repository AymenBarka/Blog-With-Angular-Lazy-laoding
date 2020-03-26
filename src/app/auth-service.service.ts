import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
loggedIn: boolean;
  constructor() {
    if(localStorage.getItem('indexConnecte') !== "null") {
      this.loggedIn=true;
    } else {
      this.loggedIn=false;
    }
   }
}
