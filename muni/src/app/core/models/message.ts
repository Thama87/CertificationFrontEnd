import { Channel } from "./channel";
import { User } from "./user";

export class Message {
    id!: number;
    content!: string;
    postTime!: Date;
    editTime!: Date;
    //user!: User;
    //channel!: Channel;
    user = new User();
    channel = new Channel();
}
