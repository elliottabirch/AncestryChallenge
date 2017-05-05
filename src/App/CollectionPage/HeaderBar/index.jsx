import React, { Component, PropTypes } from 'react';
import './HeaderBar.css';

const HeaderBar = props => (
  <div className="headerBar">
    <div className="pathContainer">{props.path && props.path.map((step, index) => (
       index !== props.path.length - 1 ? (<div className="pathStep"><div key={`${index + step}`} >{`${step}`}</div><span className="carat">></span></div>) : <div key={`${index + step}`} className="pathStep">{`${step}`}</div>
      ))}</div>
    <div className="headerBarTitleContainer"><div className="headerBarTitle">{props.title}</div></div>
  </div>
    );


export default HeaderBar;
