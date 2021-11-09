import React, { useContext } from 'react';
import { GlobalContext } from 'context';
import { IMAGE_BASE_URL } from 'helpers';

export const DiscoverCard = ({ item }) => {
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedMovie = watchlist.find(o => o.id === item.id);
  let storedMovieWatched = watched.find(o => o.id === item.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {item.poster_path ? (
          <img
            src={`${IMAGE_BASE_URL}/w200${item.poster_path}`}
            alt={`${item.title || item.name} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{item.title || item.name}</h3>
          <h4 className="release-date">
            {item.release_date || item.first_air_date}
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(item)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(item)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
