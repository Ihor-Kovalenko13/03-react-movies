export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string | null;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}