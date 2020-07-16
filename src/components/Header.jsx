import React, { useState, useContext } from 'react';
import { PokedexContext } from '../context';
import Charizard from '../assets/charizard.webp';
import Primeape from '../assets/primeape.webp';
import Search from '../assets/search.svg';
import SearchBar from './SearchBar';

const Header = () => {
  const [show, setShow] = useState(false);
  const { setRedirect, filter, setFilter } = useContext(PokedexContext);
  return (
    <header>
      <div>
        <img src={Charizard} alt="Awesome Charizard!" />
        <h1>Let&apos;s Catch Them All!</h1>
        <img src={Primeape} alt="Marvelous Primeape!" />
        <input
          type="image"
          src={Search}
          alt="search-bar-icon"
          onClick={() => setShow(!show)}
        />
      </div>
      {show && (
        <SearchBar
          onClick={() => setRedirect(true)}
          onChange={({ target: { value } }) => setFilter(value)}
          value={filter}
        />
      )}
    </header>
  );
};

export default Header;
