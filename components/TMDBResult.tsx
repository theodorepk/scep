type Props = {
  result: {
    adult: boolean;
    id: number;
    original_title: string;
    title: string;
    overview: string;
    release_date: string;
    original_language: string;
    poster_path: string;
  };
};

const TMDBResult = ({ result }: Props) => {
  return (
    <>
      <div>
        <span className="text-blue-400">{result.title} - </span>
        <span>{result.release_date.slice(0, 4)}</span>
      </div>

      <img
        src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
        alt="affiche du film"
      />
      {/* <p>{result.overview}</p> */}

      <br />
    </>
  );
};

export default TMDBResult;
