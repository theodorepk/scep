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
  const hostname: string = process.env.hostname as string;
  const response = await fetch(`${hostname}/movies`);
  const data: IFilm[] = await response.json();
  return { props: { data } };
};
