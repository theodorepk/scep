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
};

const SearchMovie = ({ setFilmToAdd, setIsActive }: Props) => {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState<Data>({ results: [] });

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/themoviedb?search=${search}&year=${year}`
      );
      setData(response.data);
    };
    fetch();
  }, [search, year]);

  return (
    <div>
      <h2>From theMovieDatabase</h2>
      <label htmlFor="">Titre</label>
      <input
        type="text"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        className="w-40"
      />
      <label htmlFor="">Année</label>
      <input
        type="text"
        onChange={(event) => {
          setYear(event.target.value);
        }}
        className="w-12"
      />
      <div className="w-screen flex flex-nowrap overflow-x-scroll border-4 border-solid border-red-500">
        {search.length > 3 &&
          data.results.map((film, index) => {
            return (
              <TMDBResult
                key={index}
                film={film}
                setFilmToAdd={setFilmToAdd}
                setIsActive={setIsActive}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SearchMovie;
