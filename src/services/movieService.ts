import type { Movie } from '../types/movie';
import axios from 'axios';

interface MovieServiceResponse {
  results: Movie[];
}

const token = import.meta.env.VITE_TMDB_TOKEN;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/search';

export default async function fetchMovies(query: string): Promise<Movie[]> {
  const options = {
    params: {
      query: query,
      include_adult: false,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get<MovieServiceResponse>('/movie', options);

  return response.data.results;
}
