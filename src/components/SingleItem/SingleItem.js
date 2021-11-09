import { useParams } from 'react-router';
import { apiCalls, POSTER_SIZE, IMAGE_BASE_URL } from 'helpers';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from 'context';
export const SingleItem = () => {
  const { type, id } = useParams();
  const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } =
    useContext(GlobalContext);
  const [state, setState] = useState([]);
  let storedMovie = watchlist.find(o => o.id === state.id);
  let storedMovieWatched = watched.find(o => o.id === state.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;
  const fetchData = async () => {
    if (type === 'movie') {
      const movie = await apiCalls.fetchMovie(id);
      setState(movie);
    } else {
      const show = await apiCalls.fetchShow(id);
      setState(show);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">{state.title}</h1>
        </div>
        <h2>{state.overview}</h2>
        <img
          src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${state.poster_path}`}
          alt={state.title}
        ></img>
        <button
          disabled={watchlistDisabled}
          className="btn btn-main"
          onClick={() => addMovieToWatchlist(state)}
        >
          Add to Watchlist
        </button>
        <button
          disabled={watchedDisabled}
          className="btn btn-main"
          onClick={() => addMovieToWatched(state)}
        >
          Add to Watched
        </button>
      </div>
    </div>
  );
};
