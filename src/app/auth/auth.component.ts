import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  currentDate : Date = new Date();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  federatedSignIn(provider:string) {
    this.authService.federatedSignIn(provider);
  }
}
