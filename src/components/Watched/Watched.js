import React, { useContext } from 'react';
import { GlobalContext } from 'context';
import { ItemCard } from 'components';
import { Link } from 'react-router-dom';

export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Movies</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}
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
