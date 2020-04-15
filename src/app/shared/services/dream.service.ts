import { Dream } from "../models/dream.model";
import { Injectable } from "@angular/core";
import { GoalsService } from "./goal.service";

@Injectable({
  providedIn: "root"
})
export class DreamsService {
  private dreams: Dream[] = [
    {
      ID: 1,
      name: "Web Application",
      description: "develop and deploy a Web Application!",
      goals: this.goalService.getGoals(1),
      isPrivate: false,
      upvote: 150,
      progress: 0,
      status: "To Do",
      user: "Dany",
      createdAt: new Date()
    },
    {
      ID: 2,
      name: "Finish Dreamtracker",
      description: "Finish this application!",
      goals: this.goalService.getGoals(2),
      isPrivate: false,
      upvote: 150,
      progress: 0,
      status: "To Do",
      user: "Dany",
      createdAt: new Date()
    }
  ];

  constructor(private goalService: GoalsService) {}

  getDreams() {
    return this.dreams;
  }

  updateGoal(dreamID: Number) {
    const dreamIndex = this.dreams.findIndex(element => element.ID === dreamID);
    this.dreams[dreamIndex].goals = this.goalService.getGoals(dreamID);
  }

  getPublicDreams() {
    return this.dreams.filter(element => element.isPrivate === false);
  }

  saveNewDream(dreamName: string, dreamDescr: string, dreamPrivate: boolean) {
    this.dreams.push({
      ID: 3,
      name: dreamName,
      description: dreamDescr,
      goals: [],
      isPrivate: dreamPrivate,
      upvote: 0,
      progress: 0,
      status: "To Do",
      user: "Dany",
      createdAt: new Date()
    });
  }

  checkDreamCount() {
    // TODO Check if Dream is active or done
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
