import React, { useState } from 'react';
import { ItemCard } from 'components';
import { SEARCH_MOVIE_BASE_URL, SEARCH_TV_BASE_URL } from 'helpers';
import { Link } from 'react-router-dom';
export const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [shows, setShows] = useState([]);
  const [movies, setMovies] = useState([]);

  const fetchMovies = async searchString => {
    const movie_uri = `${SEARCH_MOVIE_BASE_URL}${searchString}`;
    console.log(searchString);
    let response = await fetch(movie_uri).then(res => res.json());
    let { results } = response;
    setMovies(results);
    setShows([]);
  };

  const fetchShows = async searchString => {
    const tv_uri = `${SEARCH_TV_BASE_URL}${searchString}`;
    let response = await fetch(tv_uri).then(res => res.json());
    let { results } = response;
    setShows(results);
    console.log(results);
    setMovies([]);
  };

  return (
    <>
      <div className="add-page">
        <div className="container">
          <div className="add-content">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search for a movie"
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
              />
            </div>
            <div className="controls">
              <button className="btn" onClick={() => fetchShows(searchQuery)}>
                Search Tv Shows
              </button>
              <button className="btn" onClick={() => fetchMovies(searchQuery)}>
                Search Movies
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-page">
        <div className="container">
          {movies?.length > 0 && (
            <div className="movie-grid">
              {movies.map(movie => (
                <Link to={`/movie/${movie.id}`}>
                  <ItemCard movie={movie} />
                </Link>
              ))}
            </div>
          )}
          {shows?.length > 0 && (
            <div className="movie-grid">
              {shows.map(show => (
                <Link to={`/tv/${show.id}`}>
                  <ItemCard movie={show} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
