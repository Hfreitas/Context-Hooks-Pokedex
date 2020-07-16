import React, { useContext } from 'react';
import { PokedexContext } from '../context';

const PaginationComponent = () => {
  const { controlPagination } = useContext(PokedexContext);
  return (
    <div>
      <button type="button" onClick={() => controlPagination.forward}>
        <i className="fas fa-step-forward" />
      </button>
      <button type="button" onClick={() => controlPagination.backward}>
        <i className="fas fa-backward" />
      </button>
      <button type="button" onClick={() => controlPagination.first}>
        <i className="fas fa-fast-backward" />
      </button>
      <button type="button" onClick={() => controlPagination.last}>
        <i className="fas fa-fast-forward" />
      </button>
    </div>
  );
};

export default PaginationComponent;
