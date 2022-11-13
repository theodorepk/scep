import { IUser } from "../interfaces/IUser";
import { Schema, model } from "mongoose";

//create a schema
const UserSchema: Schema = new Schema<IUser>({
  name: String,
  score: Number,
});

//create a model
const User = model("User", UserSchema);

module.exports = User;
