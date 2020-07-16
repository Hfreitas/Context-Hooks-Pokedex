import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchPokemonList, fetchPokemonListDetails } from '../services/pokeApi';
import useCreateData from '../hooks/useCreateData';

export const PokedexContext = createContext();

export function PokedexProvider({ children }) {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const [redirect, setRedirect] = useState(false);
  const [filter, setFilter] = useState('');
  const pokelist = useCreateData(
    offset,
    limit,
    fetchPokemonList,
    fetchPokemonListDetails,
  );

  const controlPagination = {
    forward: () => setOffset((prevOffset) => prevOffset + limit),
    backward: () => setOffset((prevOffset) => prevOffset - limit),
    first: () => setOffset(0),
    last: () => setOffset(960),
  };

  const context = {
    controlPagination,
    setLimit,
    pokelist,
    redirect,
    setRedirect,
    filter,
    setFilter,
  };
  return (
    <div>
      <PokedexContext.Provider value={context}>
        {children}
      </PokedexContext.Provider>
    </div>
  );
}

PokedexProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
