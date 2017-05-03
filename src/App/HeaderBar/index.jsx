import React, { Component, PropTypes } from 'react';
import './HeaderBar.css';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: ['Home', 'Search', 'US Military Collection'],
      title: 'US Military Collection',
    };
  }
  render() {
    return (
      <div className="headerBar">
        <div className="pathContainer">{this.state.path.map((step, index) => <div key={`${index + step}`} className="pathStep">{`${step} >`}</div>)}</div>
        <div className="headerBarTitleContainer"><div className="headerBarTitle">{this.props.title}</div></div>
      </div>
    );
  }
}

export default HeaderBar;

HeaderBar.propTypes = {
  title: PropTypes.string,
};
