const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_MOVIE_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;
const SEARCH_TV_BASE_URL = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;
const POPULAR_MOVIE_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const POPULAR_TV_BASE_URL = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`;
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';

export {
  SEARCH_MOVIE_BASE_URL,
  SEARCH_TV_BASE_URL,
  POPULAR_MOVIE_BASE_URL,
  POPULAR_TV_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
