import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  currentDate : Date = new Date();
  focus;
  focus1;

  constructor(private amplifyService:AmplifyService) { }

  ngOnInit() {
  }

  federatedSignIn(provider: string) {
    if (provider === 'facebook') {
      Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Facebook});
    } else {
      Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google});
    }
  }

  logout() {
    // Auth.currentAuthenticatedUser().then(user => console.log(user));
    Auth.signOut();
  }
}
