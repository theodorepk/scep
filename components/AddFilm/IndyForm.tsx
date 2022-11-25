import axios from "axios";
import React, { useState } from "react";

type Props = {
  userId: string;
};

const IndyForm = ({ userId }: Props) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [year, setYear] = useState("");

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

  return (
    <form action="" onSubmit={handleSubmit} className="flex-col w-52">
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
  );
};

export default IndyForm;
