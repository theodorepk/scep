import { useContext, useState } from "react";
import React from "react";
import axios from "axios";
import { SeasonContext } from "../../contexts/season-context";
import { IGlobal } from "../../interfaces/IGlobal";

const Admin = () => {
  const [formCurrentSeason, setFormCurrentSeason] = useState(0);
  const [formMaxSeason, setFormMaxSeason] = useState(0);
  const [messages, SetMessages] = useState<string[]>([]);
  const {
    setCurrentSeason,
    // setMaxSeason
  } = useContext(SeasonContext);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    method: string
  ) => {
    event.preventDefault();
    try {
      const hostname: string = process.env.hostname as string;
      const response = await axios.post<IGlobal>(`${hostname}/global`, {
        currentSeason: formCurrentSeason,
        maxSeason: formMaxSeason,
      });
      const tab = [...messages];
      console.log(method);

      if (response.status === 200 && method === `current`) {
        tab.push(`La saison actuelle est définie sur ${formCurrentSeason}`);
        setCurrentSeason(formCurrentSeason);
      }
      if (response.status === 200 && method === `max`) {
        tab.push(`La saison max est définie sur ${formMaxSeason}`);
        // setMaxSeason(formMaxSeason);
      }
      SetMessages(tab);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event, `current`)}>
        <label htmlFor="" className="mr-2">
          Saison en cours
        </label>
        <input
          type="number"
          onChange={(event) => setFormCurrentSeason(Number(event.target.value))}
        />
        <input type="submit" />
      </form>
      <p>{messages[0]}</p>
      <form onSubmit={(event) => handleSubmit(event, `max`)}>
        <label htmlFor="" className="mr-2">
          Saison max
        </label>
        <input
          type="number"
          onChange={(event) => setFormMaxSeason(Number(event.target.value))}
        />
        <input type="submit" />
      </form>
      <p>{messages[1]}</p>
    </div>
  );
};

export default Admin;
