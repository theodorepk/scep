import { Types } from "mongoose";

export interface IFilm {
  infos: {
    title: string;
    director: string;
    year: string;
    duration?: number;
    synopsis?: string;
    poster?: string;
    wikiLink?: string;
    movieOfTheWeek: boolean;
  };
  meeting: {
    episode: string;
    date: Date | undefined;
    cm: Types.ObjectId;
  };
}
