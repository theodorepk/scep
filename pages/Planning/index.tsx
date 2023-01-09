import Films from "../../components/Planning/Films";
import { IFilm } from "../../interfaces/IFilm";
import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";
import { FilmContext } from "../../contexts/films-context";

interface IFetch {
  data: IFilm[];
}

export default function Home(props: IFetch) {
  const { setFilms } = useContext(FilmContext);

  useEffect(() => {
    setFilms(props.data);
  }, [setFilms, props.data]);

  return (
    <div className="w-screen">
      <Films data={props.data} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const hostname: string = process.env.hostname as string;
  const response = await fetch(`${hostname}/movies`);
  const data: IFilm[] = await response.json();
  return { props: { data } };
};
