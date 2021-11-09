import { GlobalContext } from 'context';
import { useContext } from 'react';

export const Watchtime = () => {
  const { watched } = useContext(GlobalContext);
  //   const [movieTime, setMovieTime] = useState(0);
  //   const [showTime, setShowTime] = useState(0);

  let totalWatchTimeMovies = watched
    .map(item => (item.runtime ? item.runtime : 0))
    .reduce((prev, current) => prev + current);
  // setMovieTime(totalWatchTimeMovies);
  let totalWatchTimeShow = watched
    .map(item =>
      item.episode_run_time * item.number_of_seasons * item.number_of_episodes
        ? item.episode_run_time *
          item.number_of_seasons *
          item.number_of_episodes
        : 0,
    )
    .reduce((prev, curr) => prev + curr);
  // setShowTime(totalWatchTimeShow);

  return (
    <div className="container">
      {watched.length > 0 ? (
        <div>
          <h2>Total Watch Time Movies: {totalWatchTimeMovies}</h2>
          <h2>Total Watch Time Shows: {totalWatchTimeShow}</h2>
        </div>
      ) : (
        <h2 className="no-movies">No movies in your list! Add some!</h2>
      )}
    </div>
  );
};
