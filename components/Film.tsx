import axios from "axios";
import getMovies from "../pages/api/movies";
import { useState } from "react";

export default function Film({ data }) {
  // const [films, setFilms] = useState([]);
  // const fetchMovies = async () => {
  //   const response = await fetch("/api/movies");
  //   const data = await response.json();
  //   setFilms(data);
  // };

  return (
    <div>
      <div className="reuInfo">
        <span>Saison</span>
        <span> | </span>
        <span>CM</span>
        <span> | </span>
        <span>Date</span>
      </div>

      {/* <h2>{films[0].infos.title}</h2> */}
      {/* <button onClick={fetchMovies}>Load Film</button> */}
      {console.log(data)}

      <div className="filmInfo">
        <div>
          <span>Réalisateur</span>
          <span> - </span>
          <span> Année</span>
          <span> - </span>
          <span> Durée </span>
        </div>
      </div>
      <div>
        <span> - </span>
        <span> image</span>
        <span> + </span>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error nihil
        facilis nostrum fugit enim nam. Assumenda maxime rem labore sed
        possimus. Earum asperiores vero quia reiciendis ex aperiam sed ratione.
      </p>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/movies");
  console.log(response);

  const data = await response.json();

  return { props: { data } };
}
