import React from "react";
import { IFilm } from "../../interfaces/IFilm";
import Film from "./Film";

type Props = {
  data: IFilm[];
};

const Films: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <div className="reuInfo">
        {data.map((film: IFilm, index: React.Key) => {
          return <Film film={film} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Films;
