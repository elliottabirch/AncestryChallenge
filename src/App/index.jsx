import React, { Component } from 'react';
import './App.css';
import MainBlock from './MainBlock';
import SideBlock from './SideBlock';
import HeaderBar from './HeaderBar';

class App extends Component {
  render() {
    return (
      <div>
        <MainBlock />
        <SideBlock />
        <HeaderBar title="US Military Collection" />
      </div>
    );
  }
}

export default App;
