import React from 'react';
import { Link } from 'react-router-dom';
import MissigNo from '../assets/missigno.webp';

const NotFound = () => {
  return (
    <section>
      <Link to="/">
        <img src={MissigNo} alt="Wild MissigNo Appears!" />
        <div>
          <span>Back to Pallet</span>
          <span>
            <i className="fas fa-arrow-right" />
          </span>
        </div>
      </Link>
    </section>
  );
};

export default NotFound;
