import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from '../services/pokeApi';

export default function usePokeList(offset, limit) {
  const [pokelist, setPokelist] = useState([]);
  const [pokeDetailsList, setPokeDetailsList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [pokelistError, setPokelistError] = useState('');

  const getPokemonDetails = (array) => {
    const memoizedPokeDetailsList = useMemo(() => {
      return array.map((element) => {
        return fetchPokemonDetails(element.url).then(
          (response) => {
            setPokeDetailsList([
              ...pokeDetailsList,
              { status: 'fulfilled', value: response },
            ]);
          },
          (response) => {
            setPokeDetailsList([
              ...pokeDetailsList,
              { status: 'rejected', value: response.message },
            ]);
          },
        );
      });
    }, [array]);
    return memoizedPokeDetailsList;
  };

  const getDetailedPokeList = useCallback(() => {
    setIsFetching(true);
    return fetchPokemonList(offset, limit).then(
      (response) => {
        setPokelist(response.results);
        getPokemonDetails(pokelist);
        setIsFetching(false);
      },
      (response) => {
        setPokelistError(response.message);
        setIsFetching(false);
      },
    );
  }, [offset, limit]);

  useEffect(() => {
    getDetailedPokeList();
    return () => {
      setIsFetching(false);
      setPokelist([]);
      setPokelistError('');
    };
  }, [getDetailedPokeList]);

  return { pokeDetailsList, isFetching, pokelistError };
}
