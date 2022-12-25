import "../styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "../components/Layout";

import SeasonProvider from "../components/ContextsProviders/SeasonProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SeasonProvider>
      <Layout />
      <Component {...pageProps} />
    </SeasonProvider>
  );
}
