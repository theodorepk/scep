import { IMovieForm } from "../../interfaces/IMovieForm";
import { IDetailFilm } from "../../interfaces/IDetailFilm";
import { handleFilmToAdd } from "../../logic/handleFilmToAdd";

type Props = {
  film: IDetailFilm;
  setFilmToAdd: (value: IMovieForm) => void;
  setIsActive: (value: boolean) => void;
};

const TMDBResult = ({ film, setFilmToAdd, setIsActive }: Props) => {
  return (
    <div
      className="w-2/5 shrink-0 bg-orange-400 border border-solid border-cyan-500"
      onClick={() => {
        setIsActive(true);
        handleFilmToAdd(film, setFilmToAdd);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        alt="affiche du film"
        className="h-48 w-4/6 object-contain"
      />
      <div>
        <span className="text-blue-400">{film.title} - </span>
        {film.release_date && (
          <span className="text-red-600">{film.release_date.slice(0, 4)}</span>
        )}
      </div>
    </div>
  );
};

export default TMDBResult;
