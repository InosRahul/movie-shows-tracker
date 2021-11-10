import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from 'context';
import { ItemCard } from 'components';
import { Link } from 'react-router-dom';
export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  const [shows, setShows] = useState(0);
  const [movies, setMovies] = useState(0);

  useEffect(() => {
    const totalMovies = watchlist.filter(item => item.release_date);
    const totalShows = watchlist.filter(item => item.first_air_date);
    setShows(totalShows.length);
    setMovies(totalMovies.length);
    // eslint-disable-next-line
  }, []);
  console.log(shows, movies);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            <span className="count-pill">
              {movies > 0 ? (
                movies > 1 ? (
                  movies + ' Movies '
                ) : (
                  movies + ' Movie '
                )
              ) : (
                <></>
              )}{' '}
              {shows > 0 ? (
                shows > 1 ? (
                  shows + ' Shows'
                ) : (
                  shows + ' Show'
                )
              ) : (
                <></>
              )}
            </span>
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map(item => (
              <Link to={`/${item.release_date ? 'movie' : 'tv'}/${item.id}`}>
                <ItemCard movie={item} key={item.id} type="watchlist" />
              </Link>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
