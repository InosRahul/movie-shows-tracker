import React, { useContext } from 'react';
import { GlobalContext } from 'context';
import { ItemCard } from 'components';
import { Link } from 'react-router-dom';
export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? 'Movie' : 'Movies'}
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
