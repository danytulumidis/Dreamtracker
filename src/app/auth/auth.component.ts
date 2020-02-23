import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private amplifyService:AmplifyService) { }

  ngOnInit() {
  }

  loginFB() {
    Auth.federatedSignIn();
  }

  logout() {
    Auth.currentAuthenticatedUser().then(user => console.log(user));
    Auth.signOut();
  }
}
