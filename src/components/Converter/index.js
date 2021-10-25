import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import './style.scss';

import currencies from 'src/data/currencies';


class Converter extends React.Component {
  state = {
    open: true,
    baseAmount: 1,
    currency: 'United States Dollar',
    search: '',
  }

  componentDidMount() {
    console.log('Converter - cDM');
  }

  componentDidUpdate() {
    console.log('Converter - cDU');
  }

  toggleOpen = () => {
    const { open } = this.state;

    // écriture
    this.setState({
      open: !open,
    });
  }

  setCurrency = (currencyName) => {
    this.setState({
      currency: currencyName,
    });
  }


  makeConversion = () => {
    const { currency, baseAmount } = this.state;
    const currentCurrencyObject = currencies.find((currentCurrency) => {
      return currentCurrency.name === currency;
    });
    const convertedAmount = baseAmount * currentCurrencyObject.rate;
    return Math.round(convertedAmount * 100) / 100;
  }

  filterCurrencies = () => {

    const { search: searchedValue } = this.state;
    const loweredSearch = searchedValue.toLowerCase().trim();

    const filteredCurrencies = currencies.filter((currency) => {
      const loweredName = currency.name.toLowerCase();
      return loweredName.includes(loweredSearch);
    });

    return filteredCurrencies;
  }

  setSearch = (searchValue) => {
    this.setState({
      search: searchValue,
    });
  }

  setBaseAmount = (baseAmount) => {
    this.setState({
      baseAmount: Number(baseAmount),
    });
  }

  render() {
    console.log('Converter - render');
    // lecture
    const {
      open,
      currency,
      baseAmount,
      search,
    } = this.state;
    const convertedAmount = this.makeConversion();
    const filteredCurrencies = this.filterCurrencies();
    return (
      <div className="converter">
        <Header
          baseAmount={baseAmount}
          toggle={this.toggleOpen}
          open={open}
          setSearch={this.setSearch}
          setBaseAmount={this.setBaseAmount}
        />
        <main>
          {open && (
            <Currencies
              changeCurrency={this.setCurrency}
              // on transmet la liste des currencies filtrées
              currencies={filteredCurrencies}
              setSearch={this.setSearch}
              currentSearch={search}
            />
          )}
          <Amount convertedAmount={convertedAmount} currency={currency} />
        </main>
      </div>
    );
  }
}

export default Converter;
