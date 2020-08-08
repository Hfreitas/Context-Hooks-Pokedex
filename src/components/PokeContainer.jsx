import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DefaultImage from '../assets/poke192.png';

const PokeContainer = ({ pokemon }) => {
  const { sprite, nationalDexNumber, name, types, height, weight } = pokemon;
  return (
    <section>
      <Link to="/">Home</Link>
      <a
        href={`https://bulbapedia.bulbagarden.net/wiki/${encodeURIComponent(
          name,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1>{name}</h1>
      </a>
      <img src={sprite || DefaultImage} alt={`${name} artwork`} />
      <h2>Pokémon Data</h2>
      <p>{`National nr. ${nationalDexNumber}`}</p>
      {types.map((type) => (
        <p key={type.name}>{type.name}</p>
      ))}
      <p>{`Height : ${height}`}</p>
      <p>{`Weight : ${weight}`}</p>
    </section>
  );
};

PokeContainer.propTypes = {
  pokemon: PropTypes.shape({
    sprite: PropTypes.string,
    nationalDexNumber: PropTypes.number,
    name: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.object),
    height: PropTypes.number,
    weight: PropTypes.number,
  }).isRequired,
};

export default PokeContainer;
