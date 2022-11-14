import { IUser } from "../interfaces/IUser";
import { Schema, model, models } from "mongoose";

//create a schema
const UserSchema: Schema = new Schema<IUser>({
  name: String,
  score: Number,
});

//create a model
const User = models.User || model("User", UserSchema);

module.exports = User;
