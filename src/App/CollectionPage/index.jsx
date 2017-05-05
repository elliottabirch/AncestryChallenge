import React, { Component } from 'react';
import './CollectionPage.css';
import MainBlock from './MainBlock';
import SideBlock from './SideBlock';
import HeaderBar from './HeaderBar';
import SubscribeBlock from './Blocks/SubscribeBlock';
import CollectionBlock from './Blocks/CollectionBlock';
import SubscribeForm from '../SubscribeForm';
import Modal from '../Modal';


const blurbs = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget quam dui. Mauris cursus mollis ligula, sed malesuada augue imperdiet ut. Suspendisse ullamcorper malesuada efficitur. Pellentesque quis libero eget ex tincidunt congue eget vel turpis. Etiam elementum, augue sed sollicitudin congue, nulla mauris vehicula ante, quis commodo orci massa nec sem. Maecenas non mollis eros.', 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eu vulputate arcu. Quisque id dictum lorem. Quisque vel lectus nec elit aliquet blandit. Aliquam gravida quis tortor tempus luctus. '];

class CollectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBlocks: [],
      title: 'World Conflicts. Personal Stories',
      blurbs,
      collection: [
        'U.S. World War II Army Enlistmentment Records',
        'U.S. CIvil War Soldiers, 1861-1865',
        'WWII U.S. Navy Muster Rolls, 1938-19949',
        'U.S. World War II Draft Registration Cards',
        'World War I Draft Registrtion Cards',
        'U.S. Marine Corps Muster ROlls, 1798-1958',
      ],
      pictureURL: 'https://s-media-cache-ak0.pinimg.com/originals/f8/07/e3/f807e3103295f54341605e1e3b4419f5.jpg',
      subscribeBlockBody: "Begin your free family tree with a few simple facts. We'll help you discover a lot more. Start your tree by subscribing today for a free trial",
      modalIsShowing: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalIsShowing: !this.state.modalIsShowing,
    });
  }

  render() {
    return (
      <div className="collectionPage">
        <HeaderBar title={this.props.pageTitle} path={this.props.path} />
        <div className="content">
          <MainBlock title={this.state.title} blurbs={this.state.blurbs} pictureURL={this.state.pictureURL} />
          <SideBlock>
            <CollectionBlock collection={this.state.collection} title="Featured Collections" />
            <SubscribeBlock body={this.state.subscribeBlockBody} title="Let us help you discover your story" onSubscribeClick={this.toggleModal} />
          </SideBlock>
        </div>
        {this.state.modalIsShowing && <Modal title="Subscribe Today" onCloseClick={this.toggleModal}>
          <SubscribeForm />
        </Modal>}
      </div>
    );
  }
}

export default CollectionPage;

