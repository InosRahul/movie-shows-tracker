import {
  API_URL,
  API_KEY,
  SEARCH_MOVIE_BASE_URL,
  POPULAR_TV_BASE_URL,
  POPULAR_MOVIE_BASE_URL,
  SEARCH_TV_BASE_URL,
} from 'helpers';

export const apiCalls = {
  fetchMovies: async (searchString, page) => {
    const endpoint = searchString
      ? `${SEARCH_MOVIE_BASE_URL}${searchString}&page=${page}`
      : `${POPULAR_MOVIE_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },

  fetchShows: async (searchString, page) => {
    const endpoint = searchString
      ? `${SEARCH_TV_BASE_URL}${searchString}&page=${page}`
      : `${POPULAR_TV_BASE_URL}&page=${page}`;
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
