export class Goal {
    public id: number;
    public name: string;
    public description: string;
    public finished: boolean;
    public dreamsID: number;
    public createdAt: Date;

    constructor(id: number, name: string, desc: string, finished: boolean, dreamsID: number, createdAt: Date) {
        this.id = id;
        this.name = name;
        this.description = desc;
        this.finished = finished;
        this.dreamsID = dreamsID;
        this.createdAt = createdAt;
    }
}