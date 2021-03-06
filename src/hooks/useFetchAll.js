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
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchAll = async page => {
    try {
      setError(false);
      setLoading(true);

      const movies = await apiCalls.fetchMovies(page);
      const shows = await apiCalls.fetchShows(page);
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

  useEffect(() => {
    if (!isLoadingMore) return;

    fetchAll(state.page + 1);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page]);

  return { state, loading, error, setIsLoadingMore };
};
