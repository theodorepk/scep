import { Types } from "mongoose";
import { IUser } from "./IUser";

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
    cm: IUser;
    attendance: [{ user: Types.ObjectId; note: null | number }];
  };
}
