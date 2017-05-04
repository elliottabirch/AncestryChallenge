import React, { Component, PropTypes } from 'react';
import './HeaderBar.css';

const HeaderBar = props => (
  <div className="headerBar">
    <div className="pathContainer">{props.path && props.path.map((step, index) => <div key={`${index + step}`} className="pathStep">{`${step} >`}</div>)}</div>
    <div className="headerBarTitleContainer"><div className="headerBarTitle">{props.title}</div></div>
  </div>
    );


export default HeaderBar;
