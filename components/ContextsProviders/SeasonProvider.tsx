import { SeasonContext } from "../../contexts/season-context";
import { useState, useEffect } from "react";
import axios from "axios";
import { IGlobal } from "../../interfaces/IGlobal";

type Props = {
  children: React.ReactNode;
};

const SeasonProvider = ({ children }: Props) => {
  const [currentSeason, setCurrentSeason] = useState<number>(0);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hostname: string = process.env.hostname as string;
    try {
      const fetchSeason = async () => {
        const response = await axios.get<IGlobal>(`${hostname}/global`);
        console.log(response);
        setCurrentSeason(response.data.currentSeason);
        setIsLoading(false);
      };
      fetchSeason();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <SeasonContext.Provider
      value={{
        currentSeason,
        setCurrentSeason,
      }}
    >
      {!isLoading && children}
    </SeasonContext.Provider>
  );
};

export default SeasonProvider;
