import { IUser } from "../interfaces/IUser";
import { Schema, model, models } from "mongoose";

//create a schema
const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  score: { type: Number, default: 0 },
});

//create a model
const User = models.User || model("User", UserSchema);

module.exports = User;
