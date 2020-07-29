import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  currentDate: Date = new Date();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("full-screen");
    body.classList.add("login");
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("full-screen");
    body.classList.remove("login");
  }

  federatedSignIn(provider: string) {
    this.authService.federatedSignIn(provider);
  }
}
