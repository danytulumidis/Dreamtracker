import { Goal } from '../models/goal.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class GoalsService {
    private goals: Goal[] = [{
        id: 1,
        name: 'Find an idea',
        description: 'Find an idea to make a web application',
        finished: true,
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
}