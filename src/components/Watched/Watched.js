import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from 'context';
import { ItemCard } from 'components';
import { Link } from 'react-router-dom';

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  const [shows, setShows] = useState(0);
  const [movies, setMovies] = useState(0);
  useEffect(() => {
    const totalMovies = watched.filter(item => item.release_date);
    const totalShows = watched.filter(item => item.first_air_date);
    setShows(totalShows.length);
    setMovies(totalMovies.length);
    // eslint-disable-next-line
  }, []);
  console.log(movies, shows);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies and Shows</h1>

          <span className="count-pill">
            {movies > 0 ? (
              movies > 1 ? (
                movies + ' Movies,'
              ) : (
                movies + ' Movie,'
              )
            ) : (
              <></>
            )}{' '}
            {shows > 0 ? shows > 1 ? shows + ' Shows' : shows + ' Show' : <></>}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map(item => (
              <Link to={`/${item.release_date ? 'movie' : 'tv'}/${item.id}`}>
                <ItemCard movie={item} key={item.id} type="watched" />
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
