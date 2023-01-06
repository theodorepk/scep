import React from "react";
import { IFilm } from "../interfaces/IFilm";

type TFilmsContext = {
  films: IFilm[];
  setFilms: (param: IFilm[]) => void;
};

export const FilmContext = React.createContext<TFilmsContext>({
  films: [],
  setFilms: () => {},
});
