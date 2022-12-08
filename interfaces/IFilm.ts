import { Types } from "mongoose";

export interface IFilm {
  infos: {
    title: string;
    director: string;
    release_date: string;
    duration?: number;
    synopsis?: string;
    poster?: string;
    movieOfTheWeek: boolean;
    tmdbId: number;
  };
  meeting: {
    season: number;
    episode: number;
    date: Date | undefined;
    cm: Types.ObjectId;
    attendance: [{ user: Types.ObjectId; note: null | number }];
  };
}
