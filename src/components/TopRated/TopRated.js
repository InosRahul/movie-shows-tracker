import { useFetchTopRatedAll } from '../../hooks';
import { ItemCard } from 'components';
import { Link } from 'react-router-dom';
export const TopRated = () => {
  let { topRated, setLoadMoreTopRated } = useFetchTopRatedAll();

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Top Rated Movies and TV Shows</h1>
        </div>

        {topRated?.results.length > 0 ? (
          <>
            <div className="movie-grid">
              {topRated?.results.map(item => (
                <Link to={`/${item.release_date ? 'movie' : 'tv'}/${item.id}`}>
                  <ItemCard movie={item} key={item.id} />
                </Link>
              ))}
            </div>
            <div className="home">
              <button
                className="btn btn-main"
                onClick={() => setLoadMoreTopRated(true)}
              >
                Load More
              </button>
            </div>
          </>
        ) : (
          <h2 className="no-movies">
            No movies or shows in your list! Add some!
          </h2>
        )}
      </div>
    </div>
  );
};
