import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ onClick, onChange, value }) {
  return (
    <section>
      <div>
        <input
          type="text"
          name="search-bar"
          placeholder="Insert Pokemon name or id"
          value={value}
          onChange={onChange}
        />
      </div>
      <button type="button" onClick={onClick}>
        Search
      </button>
    </section>
  );
}
SearchBar.defaultProps = { value: '' };

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default SearchBar;
