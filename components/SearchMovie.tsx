import { useEffect, useState } from "react";
import axios from "axios";
import TMDBResult from "./TMDBResult";

type Data = {
  page?: number;
  results: [];
};

const SearchMovie = () => {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState<Data>({ results: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/themoviedb?search=${search}&year=${year}`
      );
      setData(response.data);
      setIsLoading(false);
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
      />
      <label htmlFor="">Année</label>
      <input
        type="text"
        onChange={(event) => {
          setYear(event.target.value);
        }}
      />
      <br />
      <span>---</span>
      <br />

      {search.length > 3 &&
        data.results.map((result, index) => {
          return <TMDBResult key={index} result={result} />;
        })}
    </div>
  );
};

export default SearchMovie;
