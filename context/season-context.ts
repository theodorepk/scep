import React from "react";

type TSeasonContext = {
  season: number;
  setSeason: (param: number) => void;
};

export const SeasonContext = React.createContext<TSeasonContext>({
  season: 0,
  setSeason: () => {},
});
