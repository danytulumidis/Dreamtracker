import { Goal } from '../models/goal.model';
import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
    providedIn: 'root'
  })
export class GoalsService {
    private goals: Goal[] = [{
        id: 1,
        name: 'Find an idea',
        description: 'Find an idea to make a web application',
        finished: false,
        dreamsID: 1,
        createdAt: new Date()
    },
    {
        id: 2,
        name: 'create all components',
        description: 'create angular components for all features',
        finished: false,
        dreamsID: 1,
        createdAt: new Date()
    },
    {
        id: 3,
        name: 'Deploy Application to Production',
        description: 'Deploy via Cloudfront',
        finished: false,
        dreamsID: 2,
        createdAt: new Date()
    }];

    constructor() {}

    // Return all goals for the requested Dream by the dreamID
    getGoals(dreamID) {
        return this.goals.filter(goals => goals.dreamsID === dreamID);
    }

    // Add a goal to a dream
    addGoal(dreamID: number) {
        this.goals.push({
            id: this.goals[this.goals.length-1].id + 1,
            name: '',
            description: '',
            finished: false,
            dreamsID: dreamID,
            createdAt: new Date()
        })
    }

    // Delete a goal from a dream
    deleteGoal(dreamID: number) {
        this.goals.splice(this.goals.findIndex(element => element.dreamsID === dreamID),1);
    }

    // Set Goal to done or not done
    editFinishStatus(isFinished: boolean, goalsID: number) {
        const goalIndex = this.goals.findIndex(element => element.id === goalsID);
        this.goals[goalIndex].finished = isFinished;
    }
}