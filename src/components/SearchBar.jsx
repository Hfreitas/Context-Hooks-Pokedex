import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onClick }) {
  return (
    <section>
      <div>
        <input type="text" name="search-bar" />
      </div>
      <div>
        <label htmlFor="id">
          ID
          <input type="radio" name="radio-search" id="id" />
        </label>
        <label htmlFor="name">
          <input type="radio" name="radio-search" id="name" />
        </label>
      </div>
      <button type="button" onClick={onClick}>
        Search
      </button>
    </section>
  );
}

SearchBar.propTypes = { onClick: PropTypes.func.isRequired };

export default SearchBar;
