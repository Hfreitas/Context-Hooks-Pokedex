import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const PokedexContext = createContext();

export function PokedexProvider({ children }) {
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
