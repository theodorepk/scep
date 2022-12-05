import axios from "axios";
import { useEffect, useState } from "react";
import { IMovieForm } from "../../interfaces/IMovieForm";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons";

type Props = {
  filmId: number;
  filmToAdd: IMovieForm;
  setIsActive: (value: boolean) => void;
};

type Credits = {
  id: number;
  cast: [];
  crew: [{ name: string; job: string }];
};

const FilmSelected = ({ filmId, filmToAdd, setIsActive }: Props) => {
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

  return (
    <div className="bg-opacity-50 bg-black w-screen h-screen fixed top-0 flex justify-center items-center p-2.5">
      <div className="flex-col bg-slate-800	border-solid border-2 border-blue-500 w-full h-full">
        <div className="flex justify-end">
          <button
            className="bg-white"
            onClick={() => {
              setIsActive(false);
            }}
          >
            <IconContext.Provider value={{ size: "2em" }}>
              <GrClose />
            </IconContext.Provider>
          </button>
        </div>
        {!isLoading ? (
          <div>
            <div className="text-center">
              <span className="font-bold ">{filmToAdd.title}</span>
            </div>
            <div>
              <span className="font-bold">De : </span>
              <span>
                {
                  credits.crew.filter((member) => member.job === "Director")[0]
                    .name
                }
              </span>
            </div>
            <div>
              <span className="font-bold">Sortie : </span>
              <span>{filmToAdd.year.slice(0, 4)}</span>
            </div>
            <div className="border-solid border border-slate-600">
              <h3>Résumé</h3>
              <p>{filmToAdd.synopsis}</p>
            </div>

            <img src={filmToAdd.poster} className="h-64" />
          </div>
        ) : (
          <span> Aucun film de sélectionné</span>
        )}
      </div>
    </div>
  );
};

export default FilmSelected;
