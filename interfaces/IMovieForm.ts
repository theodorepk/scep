export interface IMovieForm {
  title: string;
  director?: string;
  year: string;
  userId?: string | undefined;
  synopsis: string;
  poster: string;
  filmId: number;
}
