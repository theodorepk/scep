import { IMovieForm } from "../../interfaces/IMovieForm";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { IUser } from "../../interfaces/IUser";

const AddMovie = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3000/api/user");
      setUsers(response.data);
      setIsLoading(false);
    };
    fetch();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/movies/add",
        {
          userId,
          title,
          director,
          year,
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

      <form
        action=""
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "200px" }}
      >
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
        </select>
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="director">Réalisateur-Réalisatrice</label>
        <input
          type="text"
          id="director"
          onChange={(event) => setDirector(event.target.value)}
        />
        <label htmlFor="year">Année de sortie</label>
        <input
          type="text"
          id="year"
          onChange={(event) => setYear(event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovie;
