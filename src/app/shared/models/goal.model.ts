export class Goal {
    public id: number;
    public name: string;
    public description: string;
    public finished: boolean;
    public dreamsID: number;
    public createdAt: Date;

    constructor(name: string, desc: string, finished: boolean, dreamsID: number, createdAt: Date) {
        this.name = name;
        this.description = desc;
        this.finished = finished;
        this.dreamsID = dreamsID;
        this.createdAt = createdAt;
    }
}