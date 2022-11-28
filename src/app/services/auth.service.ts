import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false
  user:any;

  constructor() { }

  login(){
    this.isAuthenticated = true
    this.user={
      name: "Anuka",
      role: 'Admin'
    }
  }
  logout(){
    this.isAuthenticated = false
    this.user = null
  }
}
