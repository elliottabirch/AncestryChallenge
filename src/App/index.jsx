import React, { Component } from 'react';
import './App.css';

import HeaderBar from './HeaderBar';
import CollectionPage from './CollectionPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar title="US Military Collection" />
        <CollectionPage />
      </div>
    );
  }
}

export default App;
