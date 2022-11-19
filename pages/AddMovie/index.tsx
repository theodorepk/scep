import { IMovieForm } from "../../interfaces/IMovieForm";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { IUser } from "../../interfaces/IUser";

const AddMovie = () => {
  const [movie, setMovie] = useState<IMovieForm>({
    title: "",
    director: "",
    year: "",
  });
  const [users, setUsers] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3000/api/user");
      setUsers(response);
      setIsLoading(false);
    };
    fetch();
  }, []);

  return isLoading ? (
    <span>is load</span>
  ) : (
    <div>
      <Layout />
      <p>Hello adding</p>
      {console.log(users)}
      <form action="">
        <input type="title" />
        <input type="director" />
        <input type="year" />
      </form>
    </div>
  );
};

export default AddMovie;
