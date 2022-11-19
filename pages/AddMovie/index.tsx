import { IMovieForm } from "../../interfaces/IMovieForm";
import React, { useEffect, useState } from "react";
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
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3000/api/user");
      setUsers(response.data);
      setIsLoading(false);
    };
    fetch();
  }, []);

  const onSubmit = async (event: HTMLFormElement) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/movies/add",
        {
          userId,
        }
      );
    } catch (error) {}
  };

  return isLoading ? (
    <span>is load</span>
  ) : (
    <div>
      <Layout />
      <p>Hello adding</p>

      <form action="" onSubmit={onSubmit}>
        <select
          name="cm"
          id="cm-select"
          onChange={(event) => setUserId(event.target.value)}
        >
          {users &&
            users.map((user, index) => {
              return (
                <option value={user._id.toString()} key={index}>
                  {user.name}
                </option>
              );
            })}
          <option value="">Qui es-tu ?</option>
          <option value="test">test</option>
        </select>
        <input type="title" />
        <input type="director" />
        <input type="year" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovie;
