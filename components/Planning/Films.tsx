import React, { useEffect, useState } from "react";
import { IFilm } from "../../interfaces/IFilm";
import Film from "./Film";

type Props = {
  data: IFilm[];
};

const Films: React.FC<Props> = ({ data }) => {
  const [season, setSeason] = useState(13);
  const [seasons, setSeasons] = useState<Array<number>>([]);
  const [planningSeason, SetPlanningSeason] = useState(season);

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
        <select
          name="season"
          id=""
          className="border w-full text-xl"
          onChange={(event) => SetPlanningSeason(Number(event.target.value))}
        >
          {seasons.map((planningSeason, index, arr) => {
            return (
              <option value={planningSeason.toString()} key={index}>
                Saison {planningSeason}
              </option>
            );
          })}
        </select>
      </div>

      <div className="w-full">
        {data.map((film: IFilm, index: number) => {
          if (film.meeting.season === planningSeason) {
            return <Film film={film} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default Films;
