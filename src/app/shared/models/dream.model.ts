export class Dream {
    public name: string;
    public description: string;
    public goals: string[];

    constructor(name: string, desc: string, goals: string[]) {
        this.name = name;
        this.description = desc;
        this.goals = goals;
    }
}