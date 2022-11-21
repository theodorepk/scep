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
      {console.log(result)}
      <span>{result.title}</span>
      <img
        src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
        alt="affiche du film"
      />
      <p>{result.overview}</p>
      <span>{result.release_date}</span>
      <br />
    </>
  );
};

export default TMDBResult;
