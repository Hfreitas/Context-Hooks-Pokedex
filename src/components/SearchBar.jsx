import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onClick, onChange, value }) => (
  <section>
    <div>
      <input
        type="text"
        name="search-bar"
        placeholder="Insert name or id"
        value={value}
        onChange={onChange}
      />
    </div>
    <button type="button" onClick={onClick} disabled={!value}>
      Search
    </button>
  </section>
);

SearchBar.defaultProps = { value: '' };

SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default SearchBar;
