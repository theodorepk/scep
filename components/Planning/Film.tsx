import { IFilm } from "../../interfaces/IFilm";
import React from "react";

type Props = {
  film: IFilm;
  episode: number;
};

const Film: React.FC<Props> = ({ film, episode }: Props) => {
  return (
    <div className="flex  w-screen h-40 border">
      <span className=" bg-cyan-500 border  dark:bg-cyan-900 w-[10%] flex justify-center items-center">
        {episode}
      </span>
      <div className="bg-red-400 dark:bg-red-900 w-[45%] flex flex-col">
        <span className="font-bold"> {film.infos.title}</span>
        <span>{film.infos.director}</span>
        <span>2002</span>
      </div>
      <div className=" bg-green-400 dark:bg-green-900 w-[45%] ">
        <span>{film.meeting.cm.name}</span>
        <span className="flex truncate"> {film.meeting.date?.toString()}</span>
      </div>
    </div>
  );
};

export default Film;
