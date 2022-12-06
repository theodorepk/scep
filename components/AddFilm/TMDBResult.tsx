import { IMovieForm } from "../../interfaces/IMovieForm";
import { IDetailFilm } from "../../interfaces/IDetailFilm";
import { handleFilmToAdd } from "../../logic/handleFilmToAdd";
import popcorn from "../../assets/images/popcorn.png";
import Image from "next/image";

type Props = {
  film: IDetailFilm;
  setFilmToAdd: (value: IMovieForm) => void;
  setIsActive: (value: boolean) => void;
};

const TMDBResult = ({ film, setFilmToAdd, setIsActive }: Props) => {
  return (
    <div
      className="w-2/5 shrink-0  border border-solid border-cyan-500 mr-1 first:ml-1"
      onClick={() => {
        setIsActive(true);
        handleFilmToAdd(film, setFilmToAdd);
      }}
    >
      {console.log(film.poster_path)}
      {film.poster_path ? (
        <Image
          // unoptimized
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          className="w-full h-56 object-cover"
          alt="affiche du film"
          // layout="fill"
          width={100}
          height={224}
        />
      ) : (
        <Image
          src={popcorn}
          className="w-full h-56 object-cover"
          alt="affiche du film"
          // layout="fill"
          width={100}
          height={224}
        />
      )}

      {/* <img
     
        src={popcorn}
  
        // onError={({ currentTarget }) => {
        //   currentTarget.onerror = null; // prevents looping
        //   currentTarget.src = "";
        // }}
        className="w-full h-56 object-cover"
      /> */}
      <div className="h-11">
        {/* line-clamp tailwind module for overflow on line 2 */}
        <p className=" line-clamp-2 font-bold">{film.title}</p>
      </div>
      <div>
        {film.release_date && <span>{film.release_date.slice(0, 4)}</span>}
      </div>
    </div>
  );
};

export default TMDBResult;
