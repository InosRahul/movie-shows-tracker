import { useFetchAll } from '../../hooks';
import { ItemCard } from 'components';
import { Link } from 'react-router-dom';
export const Home = () => {
  const { state } = useFetchAll();
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Popular</h1>
        </div>

        {state.results.length > 0 ? (
          <div className="movie-grid">
            {state.results.map(item => (
              <Link to={`/${item.release_date ? 'movie' : 'tv'}/${item.id}`}>
                <ItemCard movie={item} key={item.id} />
              </Link>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
