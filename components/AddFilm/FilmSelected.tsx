import axios from "axios";
import { useEffect, useState } from "react";
import { IMovieForm } from "../../interfaces/IMovieForm";

type Props = {
  filmId: number;
  filmToAdd: IMovieForm;
};

type Credits = {
  id: number;
  cast: [];
  crew: [{ name: string; job: string }];
};

const FilmSelected = ({ filmId, filmToAdd }: Props) => {
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
    <div className="fixed bg-white w-screen h-screen top-0 flex justify-center items-center bg-opacity-50">
      <div className=" bg-black w-10/12 h-5/6 border-solid border-2 border-blue-500">
        <div className="flex justify-between">
          <h2 className="underline">Film Selected</h2>
          <button>X</button>
        </div>

        <div className="border-solid border border-slate-600">
          <h3>Résalisateur</h3>
          <span>
            {credits.crew.filter((member) => member.job === "Director")[0].name}
          </span>
        </div>
        <div className="border-solid border border-slate-600">
          <h3>Titre</h3>
          <span>{filmToAdd.title}</span>
        </div>
        <div className="border-solid border border-slate-600">
          <h3>Résumé</h3>
          <p>{filmToAdd.synopsis}</p>
        </div>
        <div className="border-solid border border-slate-600">
          <h3>Année</h3>
          <p>{filmToAdd.year}</p>
        </div>
        <div className="border-solid border border-slate-600">
          <img src={filmToAdd.poster} className="h-64" />
        </div>
      </div>
    </div>
  ) : (
    <span> Aucun film de sélectionné</span>
  );
};

export default FilmSelected;
