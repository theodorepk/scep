import { Fragment } from "react";

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
};

const TMDBResult = ({ result, setFilmId }: Props) => {
  return (
    <div
      className="w-36 shrink-0"
      onClick={() => {
        setFilmId(result.id);
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
      {/* <p>{result.overview}</p> */}
    </div>
  );
};

export default TMDBResult;
