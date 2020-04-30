import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/services/user.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor() {}

  ngOnInit() {}
}
