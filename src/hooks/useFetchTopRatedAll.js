import { useEffect, useState } from 'react';
import { apiCalls } from 'helpers';

export const useFetchTopRatedAll = () => {
  const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };
  const [topRated, setTopRated] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadMoreTopRated, setLoadMoreTopRated] = useState(false);

  const fetchPopAll = async page => {
    try {
      setError(false);
      setLoading(true);

      const movies = await apiCalls.fetchTopRatedMovies(page);
      const shows = await apiCalls.fetchTopRatedShows(page);
      setTopRated(prev => ({
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
    if (!loadMoreTopRated) return;

    fetchPopAll(topRated.page + 1);
    setLoadMoreTopRated(false);
  }, [loadMoreTopRated, topRated.page]);

  return { topRated, loading, error, setLoadMoreTopRated };
};
