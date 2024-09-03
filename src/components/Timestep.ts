import { ITimestep } from "../interfaces/ITimestep";

export class Timestep {
    private id: number;
    private time: string;
    private description: string | undefined;

    public constructor(data: ITimestep) {
        this.id = data.id;
        this.time = data.time;
        this.description = data.description ? data.description : undefined;
    }

    get getData(): ITimestep {
        return {
            id: this.id,
            time: this.time,
            description: this.description,
        }
    }

    set setTime(item: string) {
        this.time = item;
    }

    set setDescription(item: string) {
        this.description = item;
    }
}