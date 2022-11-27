import { ObjectId } from "mongoose";

export interface IMovieForm {
  title: string;
  director: string;
  year: string;
  userId: ObjectId | undefined;
  synopsis: string;
  poster: string;
}
