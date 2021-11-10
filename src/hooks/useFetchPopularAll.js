import { useEffect, useState } from 'react';
import { apiCalls } from 'helpers';

export const useFetchPopularAll = () => {
  const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  const [popular, setPopular] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMorePopAll, setLoadMorePopAll] = useState(false);

  const fetchPopAll = async page => {
    try {
      setError(false);
      setLoading(true);

      const movies = await apiCalls.fetchPopularMovies(page);
      const shows = await apiCalls.fetchPopularShows(page);
      setPopular(prev => ({
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
    fetchPopAll(1);
  }, []);

  useEffect(() => {
    if (!loadMorePopAll) return;

    fetchPopAll(popular.page + 1);
    setLoadMorePopAll(false);
  }, [loadMorePopAll, popular.page]);

  return { popular, loading, error, setLoadMorePopAll };
};
