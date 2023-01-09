import React from "react";

type TSeasonContext = {
  currentSeason: number;
  setCurrentSeason: (param: number) => void;
  // maxSeason: number;
  // setMaxSeason: (param: number) => void;
};

export const SeasonContext = React.createContext<TSeasonContext>({
  currentSeason: 0,
  setCurrentSeason: () => {},
  // maxSeason: 0,
  // setMaxSeason: () => {},
});
