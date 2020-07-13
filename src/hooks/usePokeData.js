import { useEffect, useState } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from '../services/pokeApi';

export default function usePokeList(offset, limit) {
  const [pokeDetailsList, setPokeDetailsList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [pokelistError, setPokelistError] = useState('');

  const getPokeList = () => {
    fetchPokemonList(offset, limit).then(
      (response) => {
        fetchPokemonDetails(response.results).then((res) =>
          setPokeDetailsList(res),
        );
        setIsFetching(false);
      },
      (response) => {
        setPokelistError(response.message);
        setIsFetching(false);
      },
    );
  };

  useEffect(() => {
    setIsFetching(true);
    getPokeList();
    return () => {
      setIsFetching(false);
      setPokeDetailsList([]);
      setPokelistError('');
    };
  }, [offset, limit]);

  return { pokeDetailsList, isFetching, pokelistError };
}
