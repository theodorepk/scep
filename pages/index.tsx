import Films from "../components/Movies/Films";
import { IFilm } from "../interfaces/IFilm";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";

interface IFetch {
  data: IFilm[];
}

export default function Home(props: IFetch) {
  return (
    <div>
      <Layout />
      <Films data={props.data} />;
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/movies");
  const data: IFilm[] = await response.json();
  return { props: { data } };
};
