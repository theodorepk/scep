import styles from "../styles/Home.module.css";
import Link from "next";
import Films from "../components/Films";
import { IFilm } from "../interfaces/IFilm";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";

interface IFetch {
  data: IFilm[];
}

export default function Home(props: IFetch) {
  return (
    <div className={styles.container}>
      <Layout />
      <Films data={props.data} />;
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/movies");
  console.log(response);
  const data: IFilm[] = await response.json();
  return { props: { data } };
};
