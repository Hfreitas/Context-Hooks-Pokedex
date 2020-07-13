import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import usePokeData from '../hooks/usePokeData';

export const PokedexContext = createContext();

export function PokedexProvider({ children }) {
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);
  const pokelist = usePokeData(offset, limit);

  const context = { setOffset, setLimit, pokelist };
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
