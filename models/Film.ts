import { IFilm } from "../interfaces/IFilm";
import { Schema, model, models, Model } from "mongoose";

const FilmSchema: Schema = new Schema<IFilm>({
  infos: {
    title: { type: String, required: true },
    director: { type: String, required: true },
    release_date: { type: String, required: true },
    synopsis: { type: String, default: "" },
    poster: { type: String, default: "" },
  },
  meeting: {
    episode: String,
    date: Schema.Types.Mixed,
    cm: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
});

const Film = models.Film || model<IFilm>("Film", FilmSchema);

module.exports = Film;
