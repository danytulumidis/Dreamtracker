import { Component, OnInit } from "@angular/core";
import { DreamsService } from "../shared/services/dream.service";
import { Dream } from "../shared/models/dream.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit {
  userDreams: Dream[];

  constructor(private dreamsService: DreamsService) {}

  ngOnInit() {
    // TODO Get the right userid to fetch the user dreams
    this.userDreams = this.dreamsService.getUserDreams("Dany");
  }
}
