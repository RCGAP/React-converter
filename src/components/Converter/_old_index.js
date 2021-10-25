import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

import './style.scss';

import currencies from 'src/data/currencies';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    const { open } = this.state;
    this.setState({
      open: !open, 
    });
  }

  render() {
    const { open } = this.state;

    return (
      <div className="converter">
        <Header
          baseAmount={1}
          toggle={this.toggleOpen}
          open={open}
        />
        <main>
          {open && <Currencies currencies={currencies} />}
          <Amount convertedAmount={1.09} currency="United States Dollar" />
        </main>
      </div>
    );
  }
}

export default Converter;