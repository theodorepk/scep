import { IFilm } from "../interfaces/IFilm";
import { Schema, model, models } from "mongoose";

const FilmSchema: Schema = new Schema<IFilm>({
  infos: {
    title: String,
    director: String,
    year: String,
    duration: { type: Number, required: false },
    synopsis: { type: String, required: false },
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
    },
  },
});

const Film = models.Film || model("Film", FilmSchema);

module.exports = Film;
