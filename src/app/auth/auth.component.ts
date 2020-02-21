import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

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
    this.amplifyService.auth().federatedSignIn();
  }

  logout() {
    this.amplifyService.auth().signOut();
  }
}
