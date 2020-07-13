import React from 'react';
import PropTypes from 'prop-types';
import Pokecard from './Pokecard';

const PokeGrid = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <Pokecard key={item.value.id} item={item} />
      ))}
    </div>
  );
};

PokeGrid.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PokeGrid;
