import { IFilm } from "../interfaces/IFilm";
import Film from "./Film";

type Props = {
  data: IFilm[];
};

export default function Films({ data }: Props) {
  return (
    <div>
      <div className="reuInfo">
        {data.map((film: IFilm) => {
          return <Film film={film} />;
        })}
        <span>Saison</span>
        <span> | </span>
        <span>CM</span>
        <span> | </span>
        <span>Date</span>
      </div>

      {/* <h2>{films[0].infos.title}</h2> */}

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
}
