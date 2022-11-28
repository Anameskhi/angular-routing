import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'angular-routing';
  isAuthenticated:boolean = false
constructor(
  private authService: AuthService
){}

  login(){
     this.authService.login()
     this.isAuthenticated = true
  }

  logout(){
    this.authService.logout()
    this.isAuthenticated = false
  }

 
}
