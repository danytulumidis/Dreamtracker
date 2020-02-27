import { Goal } from '../models/goal.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class GoalsService {
    private goals: Goal[] = [{
        name: 'first goal',
        description: 'be fooking awesome!',
        finished: false
    }];;
}