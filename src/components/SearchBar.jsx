import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onClick }) {
  return (
    <section>
      <div>
        <input
          type="text"
          name="search-bar"
          placeholder="Insert Pokemon name or id"
        />
      </div>
      <button type="button" onClick={onClick}>
        Search
      </button>
    </section>
  );
}

SearchBar.propTypes = { onClick: PropTypes.func.isRequired };

export default SearchBar;
