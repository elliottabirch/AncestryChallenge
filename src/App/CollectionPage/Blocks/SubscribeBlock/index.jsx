
import React from 'react';
import './SubscribeBlock.css';


const SubscribeBlock = props => (
  <div className="subscribeBlock">
    <div className="subscribeBlockTitle">{props.title}</div>
    <p>{props.body}</p>
    <button className="subscribeButton" onClick={() =>
      props.onSubscribeClick()
      }
    >SUBSCRIBE TODAY</button>
  </div>
  );

export default SubscribeBlock;
