import React from 'react';
import PropTypes from 'prop-types';

const PaginationComponent = ({ onClick }) => {
  return (
    <div>
      <button type="button" onClick={onClick}>
        <i className="fas fa-step-forward" />
      </button>
      <button type="button" onClick={onClick}>
        <i className="fas fa-backward" />
      </button>
    </div>
  );
};

PaginationComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PaginationComponent;
