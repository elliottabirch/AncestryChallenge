import React, { Component } from 'react';
import './SideBlock.css';

class App extends Component {
  render() {
    return (
      <div className="sideBlockContainer">
        {this.props.children}
      </div>
    );
  }
}

export default App;
