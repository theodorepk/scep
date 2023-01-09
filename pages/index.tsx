// import Films from "../components/Planning/Films";
import { IFilm } from "../interfaces/IFilm";
import { GetServerSideProps } from "next";

interface IFetch {
  data: IFilm[];
}

export default function Home(props: IFetch) {
  return (
    <div className="w-screen">
      {/* <Films data={props.data} /> */}
      Welcome
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/movies");
  const data: IFilm[] = await response.json();
  return { props: { data } };
};
