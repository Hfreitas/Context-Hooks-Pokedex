import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pokecard = ({ item }) => {
  const { status, value } = item;

  if (status === 'rejected') {
    return (
      <div>
        <p>{value}</p>
      </div>
    );
  }

  return (
    <section>
      <Link to={`pokemon/${value.name}`}>
        <header>
          <img
            src={value.sprites.front_default}
            alt={`${value.name} frontal vision`}
          />
          <img
            src={value.sprites.back_default}
            alt={`${value.name} back vision`}
          />
        </header>
        <div>
          <p>{`Nr. ${value.id}`}</p>
          {value.types.map(({ type: { name } }) => (
            <span key={name}>{name}</span>
          ))}
        </div>
        <footer>{value.name}</footer>
      </Link>
    </section>
  );
};

Pokecard.propTypes = {
  item: PropTypes.shape({
    status: PropTypes.string,
    value(value) {
      return typeof value !== 'string' && typeof value !== 'object'
        ? new Error(
            `Invalid prop value(${typeof value}) supplied to Pokecard. Validation failed`,
          )
        : null;
    },
  }).isRequired,
};

export default Pokecard;
