import React, { useContext } from 'react';
import { PokedexContext } from '../context';

const PaginationComponent = () => {
  const { offset, controlPagination } = useContext(PokedexContext);
  return (
    <div>
      <button
        type="button"
        onClick={controlPagination.first}
        disabled={offset === 0}
      >
        <i className="fas fa-fast-backward" />
      </button>
      <button
        type="button"
        onClick={controlPagination.backward}
        disabled={offset === 0}
      >
        <i className="fas fa-step-backward" />
      </button>
      <button
        type="button"
        onClick={controlPagination.forward}
        disabled={offset === 960}
      >
        <i className="fas fa-step-forward" />
      </button>
      <button
        type="button"
        onClick={controlPagination.last}
        disabled={offset === 960}
      >
        <i className="fas fa-fast-forward" />
      </button>
    </div>
  );
};

export default PaginationComponent;
