import { useContext, useState } from "react";
import React from "react";
import axios from "axios";
import { SeasonContext } from "../../contexts/season-context";
import { IGlobal } from "../../interfaces/IGlobal";

const Admin = () => {
  const [formCurrentSeason, setFormCurrentSeason] = useState(0);
  const [messages, SetMessages] = useState<string[]>([]);
  const { setCurrentSeason } = useContext(SeasonContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const hostname: string = process.env.hostname as string;
      const response = await axios.post<IGlobal>(`${hostname}/global`, {
        currentSeason: formCurrentSeason,
      });
      const tab = [...messages];

      if (response.status === 200) {
        tab.push(`La saison actuelle est définie sur ${formCurrentSeason}`);
        setCurrentSeason(formCurrentSeason);
      }

      SetMessages(tab);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
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
    </div>
  );
};

export default Admin;
