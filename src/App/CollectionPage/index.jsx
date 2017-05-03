import React, { Component } from 'react';
import './CollectionPage.css';
import MainBlock from './MainBlock';
import SideBlock from './SideBlock';

class CollectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBlocks: [],
      title: 'World Conflicts. Personal Stories',
      blurbs: ['stuff1', 'stuff2'],
      pictureURL: 'http://peacehistory-usfp.org/wp-content/uploads/2016/09/0_KoreanWarFallenSoldier1.jpg',
    };
  }
  render() {
    return (
      <div className="collectionPage">
        <MainBlock title={this.state.title} blurbs={this.state.blurbs} pictureURL={this.state.pictureURL} />
        <SideBlock />
      </div>
    );
  }
}

export default CollectionPage;
