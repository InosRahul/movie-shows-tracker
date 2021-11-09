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
    // eslint-disable-next-line
  }, []);
  console.log(state);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">{state.title || state.name}</h1>
        </div>
        <h2>{state.overview}</h2>
        <div className="information">
          <h3>Genres</h3>

          {state?.genres?.map(genre => (
            <button className="btn">{genre.name}</button>
          ))}
          <h3>
            Budget - <button className="btn btn-main">{state.budget}</button>
          </h3>

          <h3>
            Vote average -
            <button className="btn"> {state.vote_average} </button>{' '}
          </h3>

          <h3>
            {' '}
            Revenue - <button className="btn">{state.revenue}</button>{' '}
          </h3>
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
        {/* <div className="controls">
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
        </div> */}
        <div>
          <img
            src={`${IMAGE_BASE_URL}/${POSTER_SIZE}/${state.poster_path}`}
            alt={state.title}
          ></img>
        </div>
      </div>
    </div>
  );
};
