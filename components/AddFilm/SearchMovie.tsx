import { useEffect, useState } from "react";
import axios from "axios";
import TMDBResult from "./TMDBResult";

type Data = {
  page?: number;
  results: [];
};

type Props = {
  userId: string;
};

const SearchMovie = ({ userId }: Props) => {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [data, setData] = useState<Data>({ results: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [filmToSubmit, setFilmToSubmit] = useState({
    title: "",
    director: "",
    year: "",
    userId,
  });

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
      <span className="text-red">---</span>
      <br />

      <div className="flex flex-nowrap overflow-x-scroll ">
        {search.length > 3 &&
          data.results.map((result, index) => {
            return <TMDBResult key={index} result={result} />;
          })}
      </div>
    </div>
  );
};

export default SearchMovie;