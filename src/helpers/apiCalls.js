import {
  API_URL,
  API_KEY,
  TRENDING_MOVIE_BASE_URL,
  TRENDING_TV_BASE_URL,
  POPULAR_MOVIE_BASE_URL,
  POPULAR_TV_BASE_URL,
  TOPRATED_MOVIE_BASE_URL,
  TOPRATED_TV_BASE_URL,
} from 'helpers';

export const apiCalls = {
  fetchMovies: async page => {
    const endpoint = `${TRENDING_MOVIE_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },

  fetchShows: async page => {
    const endpoint = `${TRENDING_TV_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },

  fetchPopularMovies: async page => {
    const endpoint = `${POPULAR_MOVIE_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchPopularShows: async page => {
    const endpoint = `${POPULAR_TV_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },

  fetchTopRatedMovies: async page => {
    const endpoint = `${TOPRATED_MOVIE_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },

  fetchTopRatedShows: async page => {
    const endpoint = `${TOPRATED_TV_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },

  fetchMovie: async movieId => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },

  fetchShow: async showId => {
    const endpoint = `${API_URL}tv/${showId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
};
