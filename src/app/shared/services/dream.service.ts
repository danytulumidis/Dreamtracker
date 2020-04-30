import { Dream } from "../models/dream.model";
import { Injectable } from "@angular/core";
import { GoalsService } from "./goal.service";
import { APIService } from "src/app/API.service";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class DreamsService {
  private dreams: Dream[] = [];

  constructor(
    private goalService: GoalsService,
    private apiService: APIService,
    private userService: UserService
  ) {}

  // Fetch dreams from the database when user logged in
  fetchDreams() {
    this.userService.getCurrentUser().then(user => {
      if (this.dreams.length === 0) {
        this.apiService.ListDreams(user.attributes.email).then(dreams => {
          dreams.forEach(dream =>
            this.dreams.push({
              ID: dream.dreamID,
              name: dream.name,
              description: dream.description,
              goals: [],
              isPrivate: dream.private === 1 ? true : false,
              upvote: dream.upvotes,
              progress: 0,
              status: "To Do",
              user: dream.userID,
              createdAt: this.userService.getCurrentDate()
            })
          );
        });
      }
    });
    return this.dreams;
  }

  getUserDreams(user: any) {
    return this.dreams.filter(element => element.user === user);
  }

  getPublicDreams() {
    return this.dreams.filter(element => element.isPrivate === false);
  }

  updateGoal(dreamID: Number) {
    const dreamIndex = this.dreams.findIndex(element => element.ID === dreamID);
    this.dreams[dreamIndex].goals = this.goalService.getGoals(dreamID);
  }

  // Updates Upvotes from Dream
  likeDream(dreamID: number, liked: boolean) {
    if (!liked) {
      this.dreams[
        this.dreams.findIndex(element => element.ID === dreamID)
      ].upvote += 1;
    } else {
      this.dreams[
        this.dreams.findIndex(element => element.ID === dreamID)
      ].upvote -= 1;
    }
  }

  saveNewDream(dreamName: string, dreamDescr: string, dreamPrivate: boolean) {
    let privateNumber = dreamPrivate ? 1 : 0;

    this.userService
      .getCurrentUser()
      .then(user => {
        this.apiService.CreateDream({
          dreamID: 1,
          name: dreamName,
          description: dreamDescr,
          private: privateNumber,
          userID: user.attributes.email,
          upvotes: 0,
          created: this.userService.getCurrentDate()
        });
      })
      .catch(err => console.log(err));
  }

  checkDreamCount() {
    // TODO Check if Dream is active or done
    return true;
    if (this.dreams.length === 5) {
      return false;
    }
    return true;
  }

  deleteDream(dreamName: string) {
    const selectedDreamIndex = this.dreams.findIndex(
      dream => dream.name === dreamName
    );
    // Delete all goals related to this dream
    if (this.dreams[selectedDreamIndex].goals.length > 0) {
      this.goalService.deleteGoals(this.dreams[selectedDreamIndex].ID);
    }
    // Delete the dream
    this.dreams.splice(selectedDreamIndex, 1);
  }

  saveEditedDream(editedDream) {
    const selectedDream = this.dreams.findIndex(
      dream => dream.name === editedDream.name
    );
    this.dreams[selectedDream] = editedDream;
  }

  updateProgressBar(dreamID: number) {
    const allGoals = this.goalService.getGoals(dreamID);
    const goalQuantity = allGoals.length;
    const finishedGoals = allGoals.filter(element => element.finished === true)
      .length;
    const dreamIndex = this.dreams.findIndex(element => element.ID === dreamID);

    const dreamDone = (this.dreams[dreamIndex].progress = Math.round(
      (100 / goalQuantity) * finishedGoals
    ));
    // Set Dream Status Based on the current progress
    if (dreamDone === 0) {
      this.dreams[dreamIndex].status = "To Do";
    } else if (dreamDone <= 20) {
      this.dreams[dreamIndex].status = "In Progress";
    } else if (dreamDone <= 60) {
      this.dreams[dreamIndex].status = "Keep it up!";
    } else if (dreamDone <= 90) {
      this.dreams[dreamIndex].status = "Almost Done, keep going!";
    } else if (dreamDone === 100) {
      this.dreams[dreamIndex].status = "Done";
    }
  }
}
