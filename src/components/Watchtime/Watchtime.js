import { GlobalContext } from 'context';
import { useContext } from 'react';
import { conversions } from 'helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

export const Watchtime = () => {
  const { watched } = useContext(GlobalContext);
  console.log(watched);
  let totalWatchTimeMovies = watched
    .map(item => (item.runtime ? item.runtime : 0))
    .reduce((prev, current) => prev + current);
  let totalWatchTimeShow = watched
    .filter(item => item.episode_run_time)
    .map(item =>
      item.episode_run_time.find(x => x !== undefined) *
      item.number_of_seasons *
      item.number_of_episodes
        ? item.episode_run_time.find(x => x !== undefined) *
          item.number_of_seasons *
          item.number_of_episodes
        : 0,
    )
    .reduce((prev, curr) => prev + curr);

  let totalWatchTime = totalWatchTimeShow + totalWatchTimeMovies;
  return (
    <div className="container">
      <div className="watchtime">
        {totalWatchTimeMovies > 0 ? (
          <h2>
            Total Watch Time Movies:{' '}
            <button className="btn">
              {conversions.timeFormat(totalWatchTimeMovies)}
            </button>
          </h2>
        ) : (
          <></>
        )}
        {totalWatchTimeShow > 0 ? (
          <h2>
            Total Watch Time Shows:{' '}
            <button className="btn">
              {conversions.timeFormat(totalWatchTimeShow)}
            </button>
          </h2>
        ) : (
          <></>
        )}
        {totalWatchTime > 0 ? (
          <h2>
            Total Watch Time :
            <button className="btn">
              {conversions.timeFormat(totalWatchTime)}
            </button>
          </h2>
        ) : (
          <></>
        )}
        <a
          href={`https://twitter.com/intent/tweet?hashtags=mywatchtime&text=${conversions.timeFormat(
            totalWatchTime,
          )}`}
          className="btn"
          id="tweet-quote"
          title="Tweet this"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faHashtag}></FontAwesomeIcon> Tweet your
          results
        </a>
      </div>
    </div>
  );
};
