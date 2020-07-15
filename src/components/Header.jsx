import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Charizard from '../assets/charizard.webp';
import Primeape from '../assets/primeape.webp';
import Search from '../assets/search.svg';
import SearchBar from './SearchBar';

const Header = (props) => {
  const [show, setShow] = useState(false);
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
      {show && <SearchBar />}
    </header>
  );
};

Header.propTypes = {};

export default Header;
