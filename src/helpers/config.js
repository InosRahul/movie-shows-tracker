const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_TMDB_KEY;
const SEARCH_MOVIE_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;
const SEARCH_TV_BASE_URL = `${API_URL}search/tv?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;
const TRENDING_MOVIE_BASE_URL = `${API_URL}trending/movie/week?api_key=${API_KEY}&language=en-US`;
const TRENDING_TV_BASE_URL = `${API_URL}trending/tv/week?api_key=${API_KEY}&language=en-US`;
const POPULAR_MOVIE_BASE_URL = `${API_URL}movie/popular/?api_key=${API_KEY}`;
const POPULAR_TV_BASE_URL = `${API_URL}tv/popular/?api_key=${API_KEY}&language=en-US`;
const TOPRATED_MOVIE_BASE_URL = `${API_URL}movie/top_rated/?api_key=${API_KEY}&language=en-US`;
const TOPRATED_TV_BASE_URL = `${API_URL}tv/top_rated/?api_key=${API_KEY}&language=en-US`;
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';

export {
  SEARCH_MOVIE_BASE_URL,
  SEARCH_TV_BASE_URL,
  TRENDING_MOVIE_BASE_URL,
  TRENDING_TV_BASE_URL,
  POPULAR_MOVIE_BASE_URL,
  POPULAR_TV_BASE_URL,
  TOPRATED_MOVIE_BASE_URL,
  TOPRATED_TV_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
