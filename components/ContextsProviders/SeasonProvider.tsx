import { SeasonContext } from "../../contexts/season-context";
import { useState, useEffect } from "react";
import axios from "axios";
import { IGlobal } from "../../interfaces/IGlobal";

type Props = {
  children: React.ReactNode;
};

const SeasonProvider = ({ children }: Props) => {
  const [currentSeason, setCurrentSeason] = useState<number>(0);
  const [maxSeason, setMaxSeason] = useState<number>(0);

  useEffect(() => {
    const hostname: string = process.env.hostname as string;
    const fetchSeason = async () => {
      const response = await axios.get<IGlobal>(`${hostname}/global`);
      setCurrentSeason(response.data.currentSeason);
      setMaxSeason(response.data.maxSeason);
    };
    fetchSeason();
  }, []);

  return (
    <SeasonContext.Provider
      value={{ currentSeason, setCurrentSeason, maxSeason, setMaxSeason }}
    >
      {children}
    </SeasonContext.Provider>
  );
};

export default SeasonProvider;
