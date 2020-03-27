import { Goal } from './goal.model';

// TODO: Expand Dream Model with ID etc.
export class Dream {
    public ID: number;
    public name: string;
    public description: string;
    public goals: Goal[];
    public isPrivate: boolean;
    public upvote: number;
    public progress: number;
    public finished: boolean;
    public userID: number;
    public createdAt: Date;

    constructor(name: string, desc: string, goals: Goal, isPrivate: boolean, upvote: number, progress: number,
        finished: boolean, userID: number, createdAt: Date) {
        this.name = name;
        this.description = desc;
        this.goals.push(goals);
        this.isPrivate = isPrivate;
        this.upvote = upvote;
        this.progress = progress;
        this.finished = finished;
        this.userID = userID;
        this.createdAt = createdAt;
    }
}