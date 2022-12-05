import { Fragment } from "react";
import { IMovieForm } from "../../interfaces/IMovieForm";

type Props = {
  result: {
    adult: boolean;
    id: number;
    original_title: string;
    title: string;
    overview: string;
    release_date: string;
    original_language: string;
    poster_path: string;
  };
  setFilmId: (value: number) => void;
  setFilmToAdd: (value: IMovieForm) => void;
  setIsActive: (value: boolean) => void;
};

const TMDBResult = ({
  result,
  setFilmId,
  setFilmToAdd,
  setIsActive,
}: Props) => {
  return (
    <div
      className="w-36 shrink-0"
      onClick={() => {
        setFilmId(result.id);
        setFilmToAdd({
          title: result.title,
          year: result.release_date,
          synopsis: result.overview,
          poster: `https://image.tmdb.org/t/p/w500/${result.poster_path}`,
          filmId: result.id,
        });
        setIsActive(true);
      }}
    >
      <div>
        <span className="text-blue-400">{result.title} - </span>
        {result.release_date && (
          <span className="text-red-600">
            {result.release_date.slice(0, 4)}
          </span>
        )}
      </div>

      <img
        src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
        alt="affiche du film"
        className="h-48 w-full"
      />
    </div>
  );
};

export default TMDBResult;
