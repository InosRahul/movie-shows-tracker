import React, { useContext } from 'react';
import { GlobalContext } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimes, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
export const ItemControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === 'watchlist' && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
            {/* <faEye></faEye> */}
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <i className="fa-fw far fa-eye-slash"></i>
            <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
          </button>
        </>
      )}
    </div>
  );
};
