import { Types } from "mongoose";

export interface IUser {
  name: string;
  score: number;
  // _id: Types.ObjectId;
  _id: string;
}
