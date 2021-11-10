import { useFetchPopularAll } from '../../hooks';
import { ItemCard } from 'components';
import { Link } from 'react-router-dom';
export const Popular = () => {
  let { popular, setLoadMorePopAll } = useFetchPopularAll();

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Popular Movies and TV Shows</h1>
        </div>

        {popular?.results.length > 0 ? (
          <>
            <div className="movie-grid">
              {popular?.results.map(item => (
                <Link to={`/${item.release_date ? 'movie' : 'tv'}/${item.id}`}>
                  <ItemCard movie={item} key={item.id} />
                </Link>
              ))}
            </div>
            <button
              className="btn btn-main"
              onClick={() => setLoadMorePopAll(true)}
            >
              Load More
            </button>
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
