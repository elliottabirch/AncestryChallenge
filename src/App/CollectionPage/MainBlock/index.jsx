import React, { Component } from 'react';
import './MainBlock.css';

const MainBlock = function (props) {
  return (
    <div className="mainBlock">
      <h1>{props.title}</h1>
      <p>{props.blurbs && props.blurbs[0]}</p>
      <div className="mainBlockPictureContainer">
        <img src={props.pictureURL} className="mainBlockPicture" />
      </div>
      <p>{props.blurbs && props.blurbs[1]}</p>
      <button>SEARCH ALL MILITARY RECORDS</button>
    </div>
  );
};


export default MainBlock;
