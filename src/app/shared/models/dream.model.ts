import { Goal } from './goal.model';

// TODO: Expand Dream Model with ID etc.
export class Dream {
    public name: string;
    public description: string;
    public goals: Goal[];

    constructor(name: string, desc: string, goals: Goal) {
        this.name = name;
        this.description = desc;
        this.goals.push(goals);
    }
}