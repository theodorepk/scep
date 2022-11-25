import { IFilm } from "../../interfaces/IFilm";
import React from "react";

type Props = {
  film: IFilm;
};

const Film: React.FC<Props> = ({ film }: Props) => {
  return (
    <div>
      <h2>{film.infos.title}</h2>
      <div>
        <span>{film.infos.director}</span>
        <p>{film.infos.synopsis}</p>
      </div>
      <div>
        <h3>{film.meeting.date?.toString()}</h3>
      </div>
      <span>Saison</span>
      <span> | </span>
      <span>CM</span>
      <span> | </span>
      <span>Date</span>
      <div className="filmInfo">
        <div>
          <span>Réalisateur</span>
          <span> - </span>
          <span> Année</span>
          <span> - </span>
          <span> Durée </span>
        </div>
      </div>
      <div>
        <span> - </span>
        <span> image</span>
        <span> + </span>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nihil
        facilis nostrum fugit enim nam. Assumenda maxime rem labore sed
        possimus. Earum asperiores vero quia reiciendis ex aperiam sed ratione.
      </p>
    </div>
  );
};

export default Film;
