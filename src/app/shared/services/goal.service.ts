import { Goal } from "../models/goal.model";
import { Injectable } from "@angular/core";
import { APIService } from "src/app/API.service";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class GoalsService {
  private goals: Goal[] = [];

  constructor(
    private apiService: APIService,
    private userService: UserService
  ) {}

  // Fetch goals from the database for a dream
  fetchGoals(dreamID: number): Goal[] {
    this.userService.getCurrentUser().then(user => {
      if (this.goals.length === 0) {
        this.apiService.ListGoals(dreamID).then(goals => {
          goals.forEach(goal =>
            this.goals.push({
              id: goal.goalID,
              name: goal.name,
              description: goal.description,
              finished: goal.finished === 1 ? true : false,
              dreamsID: dreamID,
              createdAt: goal.created
            })
          );
        });
      }
    });
    return this.goals;
  }

  // Return all goals for the requested Dream by the dreamID
  getGoals(dreamID) {
    return this.goals.filter(goals => goals.dreamsID === dreamID);
  }

  // Add a goal to a dream
  addGoalInDatabase(dreamID: number) {
    this.apiService
      .CreateGoal({
        goalID: 1,
        name: "",
        description: "",
        dreamID: dreamID,
        finished: 0,
        created: this.userService.getCurrentDate()
      })
      .then(goal => {
        this.goals.push({
          id: goal.goalID,
          name: goal.name,
          description: goal.description,
          finished: false,
          dreamsID: dreamID,
          createdAt: goal.created
        });
      });
  }

  saveGoals(goals: Goal[]) {
    goals.map(goal => {
      this.apiService.UpdateGoal({
        goalID: goal.id,
        name: goal.name,
        description: goal.description
      });
    });
  }

  // Delete a goal from a dream
  deleteGoal(goalID: number) {
    this.apiService.DeleteGoal(goalID).then(() => {
      this.goals.splice(
        this.goals.findIndex(element => element.id === goalID),
        1
      );
    });
  }

  // Delete ALL goals from a dream (when deleting a dream for example)
  deleteGoals(dreamID: number) {
    this.apiService.DeleteGoals(dreamID);
  }

  // Set Goal to done or not done
  editFinishStatus(isFinished: boolean, goalsID: number) {
    let finishNumber = isFinished ? 1 : 0;
    return this.apiService
      .UpdateGoal({
        goalID: goalsID,
        finished: finishNumber
      })
      .then(data => {
        this.goals[
          this.goals.findIndex(element => element.id === data.goalID)
        ].finished = isFinished;
      });
  }
}
