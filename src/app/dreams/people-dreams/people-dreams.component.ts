import { Component, OnInit } from "@angular/core";
import { DreamsService } from "src/app/shared/services/dream.service";
import { Dream } from "src/app/shared/models/dream.model";
import { APIService } from "src/app/API.service";
import { UserService } from "src/app/shared/services/user.service";

@Component({
  selector: "app-people-dreams",
  templateUrl: "./people-dreams.component.html",
  styleUrls: ["./people-dreams.component.scss"]
})
export class PeopleDreamsComponent implements OnInit {
  publicDreams: Dream[] = [];
  user: any;
  userUpvotes: any[];
  dreamsLiked: any[] = [];

  constructor(
    private dreamsService: DreamsService,
    private apiService: APIService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    this.publicDreams = await this.dreamsService.getPublicDreams();

    this.user = await this.userService.getCurrentUser();

    // TODO: Make this more generic, DRY! Check Subscription
    // Get info if user liked dream already or not
    this.userUpvotes = await this.apiService.ListUpvotes(
      this.user.attributes.email
    );
    this.userUpvotes.forEach(element => {
      this.dreamsLiked[element.dreamID] = true;
    });
  }

  async onLikeDream(dreamID: number) {
    // if true then its a unlike else a like
    if (this.checkDreamIsLiked(dreamID)) {
      await this.apiService
        .DeleteUpvote(dreamID)
        .then(data => console.log(data));
      this.dreamsService.likeDream(dreamID, false);
    } else {
      await this.apiService.CreateUpvote({
        dreamID: dreamID,
        userID: this.user.attributes.email
      });
      this.dreamsService.likeDream(dreamID, true);
    }

    // Toggle if dream is liked from user to toggle like button class
    this.dreamsLiked[dreamID] = !this.dreamsLiked[dreamID];

    // TODO: Make this more generic, DRY! Check Subscription
    this.userUpvotes = await this.apiService.ListUpvotes(
      this.user.attributes.email
    );
  }

  checkDreamIsLiked(dreamID: number): boolean {
    return this.userUpvotes.some(element => element.dreamID === dreamID);
  }

  getUserName() {}

  goToUserProfile() {}
}
