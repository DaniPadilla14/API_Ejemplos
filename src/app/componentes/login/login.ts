import { Component } from '@angular/core';
import { AuthGoogle } from '../../servicios/auth-google';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private AuthGoogle: AuthGoogle){

  }

  login(){
    this.AuthGoogle.login();
  }

}
