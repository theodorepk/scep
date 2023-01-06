import { IMovieForm } from "../../interfaces/IMovieForm";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons";
import { SeasonContext } from "../../contexts/season-context";
import axios from "axios";
import { useContext } from "react";

type Props = {
  filmId: number;
  filmToAdd: IMovieForm;
  setIsActive: (value: boolean) => void;
  userId: string | undefined;
};

const FilmSelected = ({ filmToAdd, setIsActive, userId }: Props) => {
  const { currentSeason } = useContext(SeasonContext);

  const submitFilm = async () => {
    try {
      const postFilm = await axios.post(`${process.env.hostname}/movies`, {
        title: filmToAdd.title,
        director: filmToAdd.director,
        release_date: filmToAdd.release_date,
        userId,
        synopsis: filmToAdd.synopsis,
        poster: filmToAdd.poster,
        tmdbId: filmToAdd.filmId,
        season: currentSeason,
      });
      console.log(postFilm);
    } catch (error) {}
  };

  return (
    <div className="bg-opacity-50 bg-black w-screen h-screen fixed top-0 flex justify-center items-center p-2.5">
      <div className="flex-col bg-slate-300 dark:bg-slate-800	border-solid border-2 border-blue-500 w-full h-full">
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

        <div>
          <div className="text-center">
            <span className="font-bold ">{filmToAdd.title}</span>
          </div>
          <div>
            <span className="font-bold">De : </span>
            <span>{filmToAdd.director}</span>
          </div>
          <div>
            <span className="font-bold">Sortie : </span>
            <span>{filmToAdd.release_date.slice(0, 4)}</span>
          </div>
          <div className="border-solid border border-slate-600">
            <h3>Résumé</h3>
            <p>{filmToAdd.synopsis}</p>
          </div>

          <img src={filmToAdd.poster} className="h-64" />
          <button className="border-2 rounded-lg p-1" onClick={submitFilm}>
            J'ajoute ce film à la scep
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilmSelected;
