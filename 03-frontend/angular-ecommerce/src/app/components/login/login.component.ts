import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH, OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

import OktaSignIn from '@okta/okta-signin-widget';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oktaSignIn: any;
  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth) {

    this.oktaSignIn = new OktaSignIn({
      logo: 'assets/images/logo.PNG',
      baseUrl: environment.oidc.issuer.split('/oauth2')[0],
      clientId: environment.oidc.clientId,
      redirectUri: environment.oidc.redirectUri,
      authParams: {
        issuer: environment.oidc.issuer,
        scopes: environment.oidc.scopes
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
