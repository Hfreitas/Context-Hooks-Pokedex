import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from '../services/pokeApi';

export default function usePokeList(offset, limit) {
  const [pokeDetailsList, setPokeDetailsList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [pokelistError, setPokelistError] = useState('');

  const getPokeList = useCallback(() => {
    fetchPokemonList(offset, limit).then(
      (response) => {
        fetchPokemonDetails(response.results).then((data) => {
          setPokeDetailsList(data);
        });
        setIsFetching(false);
      },
      (response) => {
        setPokelistError(response.message);
        setIsFetching(false);
      },
    );
  }, [offset, limit]);

  useEffect(() => {
    setIsFetching(true);
    getPokeList();
    return () => {
      setIsFetching(false);
      setPokeDetailsList([]);
      setPokelistError('');
    };
  }, [getPokeList]);

  return { pokeDetailsList, isFetching, pokelistError };
}
