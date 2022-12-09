import React, { useEffect, useState } from "react";
import { IFilm } from "../../interfaces/IFilm";
import Film from "./Film";

type Props = {
  data: IFilm[];
};

const Films: React.FC<Props> = ({ data }) => {
  const [season, setSeason] = useState(13);
  const [seasons, setSeasons] = useState<Array<number>>([]);

  useEffect(() => {
    let tab = [];
    for (let index = season; index > 0; index--) {
      tab.push(index);
    }
    setSeasons(tab);
  }, []);

  return (
    <div>
      {/* {console.log(data)} */}
      <div className="w-screen border">
        <select name="season" id="" className="border w-full text-xl">
          {seasons.map((season, index, arr) => {
            return (
              <option value={season.toString()} key={index}>
                SAISON {season}
              </option>
            );
          })}
        </select>
      </div>

      <div className="w-full">
        {data.map((film: IFilm, index: number) => {
          return <Film film={film} key={index} episode={index + 1} />;
        })}
      </div>
    </div>
  );
};

export default Films;
