import { FilmContext } from "../../contexts/films-context";
import { useState } from "react";
import { IFilm } from "../../interfaces/IFilm";

type Props = {
  children: React.ReactNode;
};

const FilmProvider = ({ children }: Props) => {
  const [films, setFilms] = useState<IFilm[]>([]);

  return (
    <FilmContext.Provider value={{ films, setFilms }}>
      {children}
    </FilmContext.Provider>
  );
};

export default FilmProvider;
