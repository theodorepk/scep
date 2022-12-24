import { useContext, useState } from "react";
import React from "react";
import axios from "axios";
import { SeasonContext } from "../../contexts/season-context";

const Admin = () => {
  // const [currentSeason, SetCurrentSeason] = useState(0);
  const [maxSeason, setMaxSeason] = useState(0);
  const [message, SetMessage] = useState("");
  const { setCurrentSeason, currentSeason } = useContext(SeasonContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const hostname: string = process.env.hostname as string;
      const response = await axios.post(`${hostname}/global`, {
        currentSeason,
        maxSeason,
      });
      if (response.status === 200) {
        SetMessage(`La saison actuelle est définie sur ${currentSeason}`);
        setCurrentSeason(currentSeason);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="mr-2">
          Saison en cours
        </label>
        <input
          type="number"
          onChange={(event) => setCurrentSeason(Number(event.target.value))}
        />
        <input type="submit" />
      </form>
      <form onSubmit={handleSubmit}>
        <label htmlFor="" className="mr-2">
          Saison max
        </label>
        <input
          type="number"
          onChange={(event) => setCurrentSeason(Number(event.target.value))}
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
