import { IFilm } from "../../interfaces/IFilm";
import React from "react";

type Props = {
  film: IFilm;
  episode: number;
};

const Film: React.FC<Props> = ({ film, episode }: Props) => {
  return (
    <div className="flex bg-cyan-500 w-screen h-40 border">
      <span className=" bg-cyan-900 border w-[10%] flex justify-center items-center">
        {episode}
      </span>
      <div className="bg-red-400 w-[45%] flex flex-col">
        <span className="font-bold"> {film.infos.title}</span>
        <span>{film.infos.director}</span>
        <span>2002</span>
      </div>
      <div className=" bg-green-400 w-[45%] ">
        {/* <span>{film.meeting.cm}</span> */}
        <span className="flex truncate"> {film.meeting.date?.toString()}</span>
      </div>
    </div>
  );
};

export default Film;
