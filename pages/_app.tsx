import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";
import { SeasonContext } from "../context/season-context";
import { useEffect, useState } from "react";

import axios from "axios";
import { IGlobal } from "../interfaces/IGlobal";

export default function App({ Component, pageProps }: AppProps) {
  const [season, setSeason] = useState<number>(0);

  useEffect(() => {
    const hostname: string = process.env.hostname as string;
    const fetchSeason = async () => {
      const response = await axios.get<IGlobal>(`${hostname}/global`);
      setSeason(response.data.currentSeason);
    };
    fetchSeason();
  }, []);

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      <Layout />
      <Component {...pageProps} />
    </SeasonContext.Provider>
  );
}
