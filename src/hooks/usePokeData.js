import { useCallback, useState, useEffect } from 'react';
import { fetchPokemonList } from '../services/pokeApi';

export default function usePokeList(offset, limit) {
  const [pokelist, setPokelist] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  const getPokeList = useCallback(() => {
    setIsFetching(true);
    return fetchPokemonList(offset, limit).then(
      (response) => {
        setPokelist(response.results);
        setIsFetching(false);
      },
      (response) => {
        setError(response.message);
        setIsFetching(false);
      },
    );
  }, [offset, limit]);

  useEffect(() => {
    getPokeList();
    return () => {
      setIsFetching(false);
      setPokelist([]);
      setError('');
    };
  }, [getPokeList]);

  return { pokelist, isFetching, error };
}
