import { useParams } from 'react-router';
import { apiCalls, IMAGE_BASE_URL, conversions } from 'helpers';
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
        <div className="poster">
          <img
            src={`${IMAGE_BASE_URL}/w342/${state.poster_path}`}
            alt={state.title || state.name}
          ></img>
        </div>

        <div className="information">
          <h3>{state.overview}</h3>
          <h3>
            Genres :{' '}
            {state?.genres?.map(genre => (
              <button className="btn">{genre.name}</button>
            ))}
          </h3>
          {state.number_of_seasons ? (
            <h3>
              {' '}
              Number of Seasons :{' '}
              <button className="btn">{state.number_of_seasons}</button>{' '}
            </h3>
          ) : (
            <></>
          )}

          {state.number_of_episodes ? (
            <h3>
              {' '}
              Number of Episodes :{' '}
              <button className="btn">{state.number_of_episodes}</button>{' '}
            </h3>
          ) : (
            <></>
          )}
          {state.budget && state.budget !== 0 ? (
            <h3>
              Budget :
              <button className="btn btn-main">
                $ {conversions.numberFomat(state.budget)}
              </button>
            </h3>
          ) : (
            <></>
          )}
          {state.vote_average ? (
            <h3>
              Vote average :
              <button className="btn"> {state.vote_average.toFixed(1)} </button>{' '}
            </h3>
          ) : (
            <></>
          )}

          {state.revenue && state.revenue !== 0 ? (
            <h3>
              {' '}
              Revenue :{' '}
              <button className="btn">
                ${conversions.numberFomat(state.revenue)}
              </button>{' '}
            </h3>
          ) : (
            <></>
          )}

          {state.release_date ? (
            <h3>
              {' '}
              Release Date :{' '}
              <button className="btn">{state.release_date}</button>{' '}
            </h3>
          ) : state.first_air_date ? (
            <h3>
              {' '}
              First Episode Date :{' '}
              <button className="btn">{state.first_air_date}</button>{' '}
            </h3>
          ) : (
            <></>
          )}

          {state.runtime ? (
            <h3>
              {' '}
              Duration :{' '}
              <button className="btn">
                {conversions.timeFormatRuntime(state.runtime)}
              </button>{' '}
            </h3>
          ) : state.episode_run_time ? (
            <h3>
              {' '}
              Episode Duration :{' '}
              <button className="btn">
                {conversions.timeFormatRuntime(state.episode_run_time[0])}
              </button>{' '}
            </h3>
          ) : (
            <></>
          )}

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
    </div>
  );
};
