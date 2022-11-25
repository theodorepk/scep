import { IMovieForm } from "../../interfaces/IMovieForm";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { IUser } from "../../interfaces/IUser";
import SearchMovie from "../../components/AddFilm/SearchMovie";

const AddMovie = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");

  //Get the list of users
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3000/api/users");
      setUsers(response.data);
      setIsLoading(false);
    };
    fetch();
  }, []);

  //Submit the movie to be add on the MONGODB
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/movies", {
        userId,
        title,
        director,
        year,
      });
    } catch (error) {}
  };

  return isLoading ? (
    <span>is load</span>
  ) : (
    <div>
      <Layout />
      <form action="" onSubmit={handleSubmit} className="flex-col w-52">
        <select
          name="cm"
          id="cm-select"
          defaultValue={""}
          onChange={(event) => setUserId(event.target.value)}
        >
          <option value="" disabled>
            Qui es-tu ?
          </option>
          {users &&
            users.map((user, index) => {
              return (
                <option value={user._id.toString()} key={index}>
                  {user.name}
                </option>
              );
            })}
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
      <span>------------------------</span>
      <SearchMovie userId={userId} />
    </div>
  );
};

export default AddMovie;
