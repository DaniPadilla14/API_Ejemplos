import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService, provideOAuthClient } from 'angular-oauth2-oidc';


@Injectable({
  providedIn: 'root',
})
export class AuthGoogle {
  
constructor(private OAuthServ: OAuthService){
  this.inicializarLoginGmail();
}

  inicializarLoginGmail(){

    const config: AuthConfig = {

      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '824395350675-n2ut8gm7ulja010fv9o88o1krjubd0p8.apps.googleusercontent.com',
      redirectUri:window.location.origin + '/principal',
      scope: 'openid profile email'
    }
this.OAuthServ.configure(config);
this.OAuthServ.setupAutomaticSilentRefresh();
this.OAuthServ.loadDiscoveryDocumentAndTryLogin();

  }

  login(){
    this.OAuthServ.initLoginFlow();
  }
    
    logout(){
      this.OAuthServ.logOut();
    }

    getPerfil(){
      return this.OAuthServ.getIdentityClaims();
    }

  }

