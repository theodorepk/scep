import { useContext, useState } from "react";
import React from "react";
import axios from "axios";
import { SeasonContext } from "../../context/season-context";

const Admin = () => {
  const [season, SetSeason] = useState("");
  const [message, SetMessage] = useState("");
  const { setSeason } = useContext(SeasonContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const hostname: string = process.env.hostname as string;
      const response = await axios.post(`${hostname}/global`, {
        season,
      });
      if (response.status === 200) {
        SetMessage(`La saison actuelle est définie sur ${season}`);
        setSeason(season);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="mr-2">
          Saison
        </label>
        <input
          type="number"
          onChange={(event) => SetSeason(event.target.value)}
        />
        <input type="submit" />
      </form>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Admin;
