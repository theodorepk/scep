import { IFilm } from "../interfaces/IFilm";
import { Schema, model, models, Model } from "mongoose";

const FilmSchema: Schema = new Schema<IFilm>({
  infos: {
    title: { type: String, required: true, unique: true },
    director: { type: String, required: true },
    year: { type: String, required: true },
    duration: { type: Number, default: 0 },
    synopsis: { type: String, default: "" },
    poster: { type: Schema.Types.Mixed, default: null },
    wikiLink: String,
    movieOfTheWeek: { type: Boolean, default: false },
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
