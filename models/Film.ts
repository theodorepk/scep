import { IFilm } from "../interfaces/IFilm";
import { Schema, model, models, Model } from "mongoose";

const FilmSchema: Schema = new Schema<IFilm>({
  infos: {
    title: String,
    director: String,
    year: String,
    duration: { type: Number, required: true },
    synopsis: { type: String, required: true },
    poster: { type: Schema.Types.Mixed, default: null },
    wikiLink: { type: String, required: false },
    movieOfTheWeek: Boolean,
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
