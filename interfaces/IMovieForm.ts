export interface IMovieForm {
  title: string;
  director?: string;
  release_date: string;
  userId?: string | undefined;
  synopsis: string;
  poster: string;
  filmId: number;
}
