import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //statistics: boolean = false;
  public loggedIn = false;
  userData = localStorage.getItem('userData');
  user = JSON.parse(this.userData || '{}').userName;
  constructor(private loginService: LoginService,
    private headerService: HeaderService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLoggedIn();

  }

  logoutUser(){
    this.loginService.logout();
    //window.location.reload();
  }

  loginClicked(){
    this.loggedIn = this.loginService.isLoggedIn();
  }

}
