import { IMovieForm } from "../../interfaces/IMovieForm";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { IUser } from "../../interfaces/IUser";
import SearchMovie from "../../components/AddFilm/SearchMovie";
import FilmSelected from "../../components/AddFilm/FilmSelected";
import { ObjectId } from "mongoose";
// import IndyForm from "../../components/AddFilm/IndyForm";

const AddMovie = () => {
  const [users, setUsers] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState<ObjectId>();
  const [filmId, setFilmId] = useState(0);
  const [filmToAdd, setFilmToAdd] = useState<IMovieForm>({
    title: "",
    director: "",
    year: "",
    userId: userId,
    synopsis: "",
    poster: "",
  });

  //Get the list of users
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:3000/api/users");
      setUsers(response.data);
      setIsLoading(false);
    };
    fetch();
  }, []);

  return isLoading ? (
    <span>is load</span>
  ) : (
    <div className="w-52">
      <Layout />
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
      <FilmSelected filmId={filmId} />
      <SearchMovie setFilmId={setFilmId} />
      {/* <IndyForm userId={userId} /> */}
    </div>
  );
};

export default AddMovie;
