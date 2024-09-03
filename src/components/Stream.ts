import { ILink } from "../interfaces/ILink";
import { ITimestep } from "../interfaces/ITimestep";
import { Status } from "../types/status";
import { IStream } from "../interfaces/IStream";

export class Stream {
    private id: string;
    private name: string;
    private date: Date;
    private status: Status;
    private links: ILink[];
    private timesteps: ITimestep[];

    public constructor(data: IStream) {
        this.id = data.id;
        this.name = data.name;
        this.date = data.date;
        this.status = data.status;
        this.links = data.links;
        this.timesteps = data.timesteps;
    }

    get getData(): IStream {
        return {
            id: this.id,
            name: this.name,
            date: this.date,
            status: this.status,
            links: this.links,
            timesteps: this.timesteps,
        }
    }

    set setName(item: string) {
        this.name = item;
    }

    set setStatus(item: Status) {
        this.status = item;
    }

    set setDate(item: Date) {
        this.date = item;
    }

    addLink(item: ILink): void {
        this.links.push(item);
    }

    addTimestep(item: ITimestep): void {
        this.timesteps.push(item);
    }
}