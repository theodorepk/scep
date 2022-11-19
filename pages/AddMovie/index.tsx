import { IMovieForm } from "../../interfaces/IMovieForm";
import { useState } from "react";
import Layout from "../../components/Layout";

const AddMovie = () => {
  const [movie, setMovie] = useState<IMovieForm>({
    title: "",
    director: "",
    year: "",
  });

  return (
    <div>
      <Layout />
      <p>Hello adding</p>
      <form action="">
        <input type="title" />
        <input type="director" />
        <input type="year" />
      </form>
    </div>
  );
};

export default AddMovie;
