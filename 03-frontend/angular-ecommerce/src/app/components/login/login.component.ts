import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH, OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

import OktaSignIn from '@okta/okta-signin-widget';

import myAppConfig from '../../config/my-app-config';
require('dotenv').config({ path: "./config/my-app-config" });

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSignIn: any;
  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {

/*     this.oktaSignIn = new OktaSignIn({
      logo: 'assets/images/logo.PNG',
      baseUrl: myAppConfig.oidc.issuer.split('/oauth2')[0],
      clientId: myAppConfig.oidc.clientId,
      redirectUri: myAppConfig.oidc.redirectUri,
      authParams: {
        issuer: myAppConfig.oidc.issuer,
        scopes: myAppConfig.oidc.scopes
      }  
      
    }); */
    this.oktaSignIn = new OktaSignIn({
      logo: 'assets/images/logo.PNG',
      baseUrl: oidc.issuer.split('/oauth2')[0],
      clientId: oidc.clientId,
      redirectUri: oidc.redirectUri,
      authParams: {
        issuer: oidc.issuer,
        scopes: oidc.scopes
      }  
      
    });
  }

  ngOnInit(): void {
    this.oktaSignIn.remove();

    this.oktaSignIn.renderEl({
      el: '#okta-sign-in-widget'}, // name should be same as div tag id in login.component.html
      (response: any) => {
        if (response.status === 'SUCCESS') {
          this.oktaAuth.signInWithRedirect();
        }
      },
      (error: any) => {
        console.log(error);
        throw error;
      }
    );
  }

  ngOnDestroy() {
    this.oktaSignIn.remove();
  }

}
