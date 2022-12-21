import { Channel } from "../models/channel";
import { User } from "../models/user";

export interface MessageI {
    id: number;
    content: string;
    postTime: string;
    editTime: string;
    user: User;
    channel: Channel;
}
