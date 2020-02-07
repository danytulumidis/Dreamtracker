export class Goal {
    public name: string;
    public description: string;
    public finished: boolean;

    constructor(name: string, desc: string) {
        this.name = name;
        this.description = desc;
        this.finished = false;
    }
}