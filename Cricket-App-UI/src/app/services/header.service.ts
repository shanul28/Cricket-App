import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  loggedIn: boolean = false;
  constructor() { }

  loginClicked(){
    return !this.loggedIn;
  }
}
