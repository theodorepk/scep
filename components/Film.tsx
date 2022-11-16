const Film = ({ film }) => {
  return (
    <div>
      <h2>{film.infos.title}</h2>
      <div>
        <span>{film.infos.director}</span>
        <p>{film.infos.synopsis}</p>
      </div>
      <div>
        <h3>{film.meeting.date}</h3>
      </div>
    </div>
  );
};

export default Film;
