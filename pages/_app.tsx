import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

import SeasonProvider from "../components/ContextsProviders/SeasonProvider";
import FilmProvider from "../components/ContextsProviders/FilmProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SeasonProvider>
      <FilmProvider>
        <Layout />
        <Component {...pageProps} />
      </FilmProvider>
    </SeasonProvider>
  );
}
