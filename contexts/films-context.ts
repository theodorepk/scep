import React from "react";

type TFilmsContext = {};

export const SeasonContext = React.createContext<TFilmsContext>({
  currentSeason: 0,
  setCurrentSeason: () => {},
  maxSeason: 0,
  setMaxSeason: () => {},
});
