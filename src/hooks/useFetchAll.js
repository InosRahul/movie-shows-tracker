import { useEffect, useState } from 'react';
import { apiCalls } from 'helpers';

export const useFetchAll = () => {
  const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchAll = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await apiCalls.fetchMovies(searchTerm, page);
      const shows = await apiCalls.fetchShows(searchTerm, page);
      setState(prev => ({
        ...movies,
        ...shows,
        results:
          page > 1
            ? [...prev.results, ...movies.results, ...shows.results]
            : [...movies.results, ...shows.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAll(1);
  }, []);

  return { state, loading, error };
};
