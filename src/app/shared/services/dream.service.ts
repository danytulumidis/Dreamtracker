import { Dream } from '../models/dream.model';
import { Injectable } from '@angular/core';
import { GoalsService } from './goal.service';

@Injectable({
    providedIn: 'root'
  })
export class DreamsService {
    private dreams: Dream[] = [{
        ID: 1,
        name: 'Web Application',
        description: 'develop and deploy a Web Application!',
        goals: this.goalService.getGoals(1),
        isPrivate: false,
        upvote: 150,
        progress: 0,
        finished: false,
        userID: 123,
        createdAt: new Date() 
    },
    {
        ID: 2,
        name: 'Finish Dreamtracker',
        description: 'Finish this application!',
        goals: this.goalService.getGoals(2),
        isPrivate: false,
        upvote: 150,
        progress: 0,
        finished: false,
        userID: 123,
        createdAt: new Date() 
    }];

    constructor(private goalService: GoalsService) {}

    getDreams() {
        return this.dreams;
    }

    // TODO Use real goals and not dummy values
    saveNewDream(dreamName: string, dreamDescr: string, dreamPrivate: boolean) {
        this.dreams.push({
            ID: 3,
            name: dreamName,
            description: dreamDescr,
            goals: [],
            isPrivate: dreamPrivate,
            upvote: 0,
            progress: 0,
            finished: false,
            userID: 123,
            createdAt: new Date() 
        })
    }

    checkDreamCount() {
        // TODO Check if Dream is active or done
        if (this.dreams.length === 5) {
            return false;
        }
        return true;
    }

    // TODO[A] Dream needs another unique indicator than the name
    deleteDream(dreamName: string) {
        const selectedDream = this.dreams.find(dream => dream.name === dreamName);
        
        this.dreams.splice(this.dreams.findIndex(dream => dream.name === selectedDream.name),1)
    }

    saveEditedDream(editedDream) {
        const selectedDream = this.dreams.findIndex(dream => dream.name === editedDream.name);
        this.dreams[selectedDream] = editedDream;
    }
}