import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div className="shoply">
        <Header />
        <main>
          <div className="container">
            {this.props.children}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
