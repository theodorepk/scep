import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  filmId: number;
};

type Credits = {
  id: number;
  cast: [];
  crew: [{ name: string; job: string }];
};

const FilmSelected = ({ filmId }: Props) => {
  const [credits, setCredits] = useState<Credits>({
    id: 0,
    cast: [],
    crew: [
      {
        name: "",
        job: "",
      },
    ],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      if (filmId) {
        const response = await axios.get(
          `http://localhost:3000/api/themoviedb/${filmId}`
        );
        setCredits(response.data);
        setIsLoading(false);
      }
    };
    fetch();
  }, [filmId]);

  return !isLoading ? (
    <div className="border-solid border-2 border-blue-500">
      <h2 className="underline">Film Selected</h2>
      <div className="border-solid border border-slate-600">
        <h3>Résalisateur</h3>
        <span>
          {credits.crew.filter((member) => member.job === "Director")[0].name}
        </span>
      </div>
      <div className="border-solid border border-slate-600">
        <h3>Titre</h3>
        <span>
          {credits.crew.filter((member) => member.job === "Director")[0].name}
        </span>
      </div>
    </div>
  ) : (
    <span> Not Ready</span>
  );
};

export default FilmSelected;
