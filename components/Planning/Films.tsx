import React, { useContext, useEffect, useState } from "react";
import { SeasonContext } from "../../contexts/season-context";
import { IFilm } from "../../interfaces/IFilm";
import Film from "./Film";

type Props = {
  data: IFilm[];
};

const Films: React.FC<Props> = ({ data }) => {
  const { currentSeason } = useContext(SeasonContext);
  const [seasons, setSeasons] = useState<Array<number>>([]);
  const [planningSeason, SetPlanningSeason] = useState(currentSeason);

  useEffect(() => {
    let tab = [];
    for (let index = 13; index > 0; index--) {
      tab.push(index);
    }
    setSeasons(tab);
  }, [currentSeason]);

  return (
    <div>
      <div className="w-screen border">
        <select
          name="season"
          id=""
          className="border w-full text-xl"
          value={planningSeason}
          onChange={(event) => SetPlanningSeason(Number(event.target.value))}
        >
          {seasons.map((planningSeason, index) => {
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
