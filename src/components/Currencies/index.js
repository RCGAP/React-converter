import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Currencies = ({
  currencies,
  changeCurrency,
  setSearch,
  currentSearch,
}) => (
  <section className="currencies">
    <input
      className="currencies-search"
      type="search"
      placeholder="Rechercher"
      value={currentSearch}
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
    <ul className="currencies-list">
      {
        currencies.map(({ name }) => (
          <li
            className="currencies-list-item"
            key={name}
            onClick={() => {
              changeCurrency(name);
            }}
          >
            {name}
          </li>
        ))
      }
    </ul>
  </section>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  changeCurrency: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  currentSearch: PropTypes.string.isRequired,
};

export default Currencies;
