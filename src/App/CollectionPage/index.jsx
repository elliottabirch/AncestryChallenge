import React, { Component } from 'react';
import './CollectionPage.css';
import MainBlock from './MainBlock';
import SideBlock from './SideBlock';

class App extends Component {
  render() {
    return (
      <div>
        <MainBlock />
        <SideBlock />
      </div>
    );
  }
}

export default App;
