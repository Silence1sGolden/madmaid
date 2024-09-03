import { Status } from "../types/status";
import { ILink } from "./ILink";
import { ITimestep } from "./ITimestep";

export interface IStream {
    id: string;
    name: string;
    date: Date;
    status: Status;
    links: ILink[];
    timesteps: ITimestep[];
}