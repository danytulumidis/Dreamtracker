import { Component, OnInit } from "@angular/core";
import { DreamsService } from "src/app/shared/services/dream.service";
import { Dream } from "src/app/shared/models/dream.model";
import { APIService } from "src/app/API.service";
import { UserService } from "src/app/shared/services/user.service";
import { Router } from "@angular/router";

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
  userName: string = "";

  constructor(
    private dreamsService: DreamsService,
    private apiService: APIService,
    private userService: UserService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.publicDreams = await this.dreamsService.getPublicDreams();

    this.user = this.userService.user;

    // Get info if user liked dream already or not
    this.userUpvotes = await this.apiService.ListUpvotes(
      this.user.attributes.email
    );
    // Save user upvotes in a hash table to identify if a user upvotes a dream or not
    this.userUpvotes.forEach(element => {
      this.dreamsLiked[element.dreamID] = true;
    });
  }

  async onLikeDream(dreamID: number) {
    // if true then its a unlike else a like
    if (this.checkDreamIsLiked(dreamID)) {
      await this.apiService
        .DeleteUserUpvote(dreamID, this.user.attributes.email)
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

    this.userUpvotes = await this.apiService.ListUpvotes(
      this.user.attributes.email
    );
  }

  checkDreamIsLiked(dreamID: number): boolean {
    return this.userUpvotes.some(element => element.dreamID === dreamID);
  }

  goToUserProfile(userID: string) {
    // If the Dream is from the current User navigate to his profile
    if (userID === this.user.attributes.email) {
      this.router.navigate(["/profile"]);
    } else {
      this.router.navigate(["/userProfile", userID]);
    }
  }
}
