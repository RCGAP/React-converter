import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Amount = ({ convertedAmount, currency }) => (
  <section className="amount">
    <p className="amount-value">{convertedAmount}</p>
    <p className="amount-currency">{currency}</p>
  </section>
);

Amount.propTypes = {
  convertedAmount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Amount;
