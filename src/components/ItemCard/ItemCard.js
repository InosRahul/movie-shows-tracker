import React from 'react';
import { ItemControls } from '../ItemControl';

export const ItemCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      {type ? <ItemControls type={type} movie={movie} /> : ''}
    </div>
  );
};
