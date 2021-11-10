import { useFetchAll } from '../../hooks';
import { ItemCard } from 'components';
import { Link } from 'react-router-dom';
export const Home = () => {
  let { state, setIsLoadingMore } = useFetchAll();

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Trending Movies and TV Shows this Week</h1>
        </div>

        {state?.results.length > 0 ? (
          <>
            <div className="movie-grid">
              {state?.results.map(item => (
                <Link to={`/${item.release_date ? 'movie' : 'tv'}/${item.id}`}>
                  <ItemCard movie={item} key={item.id} />
                </Link>
              ))}
            </div>
            <div className="home">
              <button
                className="btn btn-main home"
                onClick={() => setIsLoadingMore(true)}
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
