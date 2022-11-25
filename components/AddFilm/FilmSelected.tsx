import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  filmId: number;
};

type Credits = {
  id: number;
  cast: [];
  crew: [];
};

const FilmSelected = ({ filmId }: Props) => {
  const [credits, setCredits] = useState<Credits>({
    id: 0,
    cast: [],
    crew: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      if (filmId) {
        const response = await axios.get(
          `http://localhost:3000/api/themoviedb/${filmId}`
        );
        setCredits(response.data);
        setIsLoading(false);
      }
    };
    fetch();
  }, [filmId]);

  return !isLoading ? (
    <div>
      <h2 className="border-solid border-2 border-black">Film Selected</h2>
      <div className="border-solid border border-black">
        <h3>Résalisateur</h3>
        <span>
          {credits.crew.filter((member) => member.job === "Director")[0].name}
        </span>
      </div>
    </div>
  ) : (
    <span> Not Ready</span>
  );

  //   return (
  //     <div>
  //       <h2 className="border-solid border-2 border-black">Film Selected</h2>
  //       <div className="border-solid border border-black">
  //         <h3>Résalisateur</h3>
  //         {console.log(
  //           credits.crew.filter((member) => member.job === "Director")
  //         )}
  //         <span></span>
  //       </div>
  //     </div>
  //   );
};

export default FilmSelected;
