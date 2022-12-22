import { Channel } from "./channel";
import { User } from "./user";

export class Message {
    id!: number;
    content!: string;
    postTime!: string;
    editTime = null;
    // user!: User;
    // channel!: Channel;
    user = new User();
    channel = new Channel();
}
