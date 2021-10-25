import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Header = ({
  baseAmount,
  toggle,
  open,
  setSearch,
  setBaseAmount,
}) => {
  return (
    <header className="header">
      <h1 className="header-title">Convertisseur</h1>
      <p className="header-amount">
        <input
          className="header-amount-input"
          type="number"
          min="0"
          value={baseAmount === 0 ? '' : baseAmount}
          onChange={(event) => {
            setBaseAmount(event.target.value);
          }}
        /> euro
      </p>
      <button
        onClick={toggle}
        type="button"
      >
        {open ? 'Masquer' : 'Afficher' }
      </button>
      <button
        onClick={() => {
          setSearch('dollar');
        }}
        type="button"
      >
        $
      </button>
    </header>
  );
};

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setSearch: PropTypes.func.isRequired,
  setBaseAmount: PropTypes.func.isRequired,
};

export default Header;
