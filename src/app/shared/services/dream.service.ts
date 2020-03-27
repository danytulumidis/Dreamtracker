import { Dream } from '../models/dream.model';
import { Injectable } from '@angular/core';
import { GoalsService } from './goal.service';

@Injectable({
    providedIn: 'root'
  })
export class DreamsService {
    private dreams: Dream[] = [{
        name: 'Web Application',
        description: 'develop and deploy a Web Application!',
        goals: this.goalService.getGoals(1)
    },
    {
        name: 'Finish Dreamtracker',
        description: 'Finish this application!',
        goals: this.goalService.getGoals(2)
    }];

    constructor(private goalService: GoalsService) {}

    getDreams() {
        return this.dreams;
    }

    // TODO Use real goals and not dummy values
    saveNewDream(dreamName: string, dreamDescr: string) {
        this.dreams.push({
            name: dreamName,
            description: dreamDescr,
            // TODO push goals
            goals: []
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