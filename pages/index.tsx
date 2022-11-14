import styles from "../styles/Home.module.css";
import Film from "../components/Film";
import { IFilm } from "../interfaces/IFilm";
import { GetServerSideProps } from "next";

interface IFetch {
  data: IFilm[];
}

export default function Home(props: IFetch) {
  return (
    <div className={styles.container}>
      <header>
        <img src="" alt="" />
        <h1>Salut</h1>
      </header>
      <Film data={props.data} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/movies");
  console.log(response);
  const data: IFilm[] = await response.json();
  return { props: { data } };
};
