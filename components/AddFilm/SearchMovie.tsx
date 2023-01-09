import { useEffect, useState } from "react";
import axios from "axios";
import TMDBResult from "./TMDBResult";
import { IMovieForm } from "../../interfaces/IMovieForm";

type Data = {
  page?: number;
  results: [];
};

type Props = {
  setFilmToAdd: (value: IMovieForm) => void;
  setIsActive: (value: boolean) => void;
  userId: string;
};

const SearchMovie = ({ setFilmToAdd, setIsActive, userId }: Props) => {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState<Data>({ results: [] });

  useEffect(() => {
    const fetch = async () => {
      const hostname: string = process.env.hostname as string;
      const response = await axios.get(
        `${hostname}/themoviedb?search=${search}&year=${year}`
      );
      console.log(response);
      setData(response.data);
    };
    fetch();
  }, [search, year]);

  return (
    <div>
      <h2>From theMovieDatabase</h2>
      <label htmlFor="" className={!userId ? `text-slate-200` : `text-black`}>
        Titre
      </label>
      <input
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        className="w-40 disabled:bg-slate-200 disabled:border-slate-200"
        disabled={userId ? false : true}
      />
      <label
        htmlFor=""
        className={!userId ? `text-slate-200` : `text-black`}
        // className="text-slate-200"
      >
        Année
      </label>
      <input
        type="text"
        onChange={(event) => {
          setYear(event.target.value);
        }}
        className="w-12  disabled:bg-slate-200 disabled:border-slate-200"
        disabled={userId ? false : true}
      />
      <div className="w-screen flex flex-nowrap overflow-x-scroll border-4 border-solid border-red-500">
        {search.length > 3 && data.results.length ? (
          data.results.map((film, index) => {
            return (
              <TMDBResult
                key={index}
                film={film}
                setFilmToAdd={setFilmToAdd}
                setIsActive={setIsActive}
              />
            );
          })
        ) : (
          <span>Cherche ton film</span>
        )}
      </div>
    </div>
  );
};

export default SearchMovie;
