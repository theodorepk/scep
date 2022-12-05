import { IMovieForm } from "../../interfaces/IMovieForm";
import axios from "axios";

interface IDetailFilm {
  adult: boolean;
  id: number;
  original_title: string;
  title: string;
  overview: string;
  release_date: string;
  original_language: string;
  poster_path: string;
}

type Props = {
  film: IDetailFilm;
  setFilmToAdd: (value: IMovieForm) => void;
  setIsActive: (value: boolean) => void;
};

const TMDBResult = ({ film, setFilmToAdd, setIsActive }: Props) => {
  const handleCredits = async (id: number, film: IDetailFilm) => {
    const response = await axios.get(
      `http://localhost:3000/api/themoviedb/${id}`
    );

    const director: string = response.data.crew.filter(
      (member: { name: string; job: string }) => member.job === "Director"
    )[0].name;

    setFilmToAdd({
      title: film.title,
      director: director,
      year: film.release_date,
      synopsis: film.overview,
      poster: `https://image.tmdb.org/t/p/w500/${film.poster_path}`,
      filmId: film.id,
    });
  };

  return (
    <div
      className="w-full shrink-0"
      onClick={() => {
        setIsActive(true);
        handleCredits(film.id, film);
      }}
    >
      <div>
        <span className="text-blue-400">{film.title} - </span>
        {film.release_date && (
          <span className="text-red-600">{film.release_date.slice(0, 4)}</span>
        )}
      </div>

      <img
        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        alt="affiche du film"
        className="h-48 w-4/6 object-contain"
      />
    </div>
  );
};

export default TMDBResult;
