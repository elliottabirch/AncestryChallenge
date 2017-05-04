import React, { Component } from 'react';
import './App.css';

import Footer from './Footer';
import CollectionPage from './CollectionPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'US Military Collection',
      currentPath: ['Home', 'Search', 'US Military Collection'],
    };
  }
  render() {
    return (
      <div className="App">
        <CollectionPage pageTitle={this.state.pageTitle} path={this.state.currentPath} />
        <Footer />
      </div>
    );
  }
}

export default App;
