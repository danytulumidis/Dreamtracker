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
  async fetchGoals(dreamID: number) {
    const goals = await this.apiService.ListGoals(dreamID);

    goals.forEach(goal =>
      this.goals.push({
        id: goal.goalID,
        name: goal.name,
        description: goal.description,
        finished: goal.finished === 1 ? true : false,
        dreamsID: goal.dreamID,
        createdAt: goal.created
      })
    );

    this.sortGoals();
  }

  // Return all goals for the requested Dream by the dreamID
  getGoals(dreamID: number): Goal[] {
    return this.goals.filter(goals => goals.dreamsID === dreamID);
  }

  getGoalByID(id: number) {
    const goalIndex = this.goals.findIndex(goal => goal.id === id);
    return this.goals[goalIndex];
  }

  // Add a goal to a dream
  async addGoalInDatabase(dreamID: number) {
    const goal = await this.apiService.CreateGoal({
      name: "",
      description: "",
      dreamID: dreamID,
      finished: 0,
      created: this.userService.getCurrentDate()
    });

    this.goals.push({
      id: goal.goalID,
      name: goal.name,
      description: goal.description,
      finished: false,
      dreamsID: dreamID,
      createdAt: goal.created
    });

    return goal.goalID;
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
  deleteGoals(goals: Goal[]) {
    goals.forEach(element =>
      this.apiService.DeleteGoal(element.id).then(() => {
        this.goals.splice(
          this.goals.findIndex(goal => goal.id === element.id),
          1
        );
      })
    );
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

  // Sort Goals so the user will see the goals that are done at first to show him what he already achieved
  sortGoals() {
    this.goals.sort((a, b) => {
      return +b.finished - +a.finished;
    });
  }
}
