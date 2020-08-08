import { useCallback, useEffect, useState } from 'react';

const pokeData = {
  sprite: '',
  nationalDexNumber: null,
  name: '',
  types: [],
  height: null,
  weight: null,
};

const setPokeData = (data) => ({
  ...pokeData,
  sprite: data.sprites.other['official - artwork'].front_default,
  nationalDexNumber: Number(data.id),
  name: data.name,
  types: [...data.types],
  height: Number(data.height),
  weight: Number(data.weight),
});

export default function useFetchPokemonData(callback, param) {
  const [pokemon, setPokemon] = useState(pokeData);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  const getPokeData = useCallback(() => {
    callback(param).then(
      (response) => {
        setPokemon(setPokeData(response));
        setIsFetching(false);
      },
      (response) => {
        setError(response.message);
        setIsFetching(false);
      },
    );
  }, [param]);

  useEffect(() => {
    setIsFetching(true);
    getPokeData();
    return () => {
      setIsFetching(false);
      setPokemon(pokeData);
      setError('');
    };
  }, [getPokeData]);

  return { pokemon, isFetching, error };
}
