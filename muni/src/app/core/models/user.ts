import { UserI } from "../interfaces/user-i";

export class User implements UserI{
    id!: number;
    name!: string;
}
