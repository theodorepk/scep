import { IDetailFilm } from "../interfaces/IDetailFilm";
import { IMovieForm } from "../interfaces/IMovieForm";
import axios from "axios";

export const handleFilmToAdd = async (
  film: IDetailFilm,
  setFilmToAdd: (value: IMovieForm) => void
) => {
  const response = await axios.get(
    `http://localhost:3000/api/themoviedb/${film.id}`
  );

  const director: string = response.data.crew.filter(
    (member: { name: string; job: string }) => member.job === "Director"
  )[0].name;

  setFilmToAdd({
    title: film.title,
    director: director,
    release_date: film.release_date,
    synopsis: film.overview,
    poster: `https://image.tmdb.org/t/p/w500/${film.poster_path}`,
    filmId: film.id,
  });
};
