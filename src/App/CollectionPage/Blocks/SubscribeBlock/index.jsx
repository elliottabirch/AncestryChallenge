
import React from 'react';
import './SubscribeBlock.css';


const SubscribeBlock = props => (
  <div>
    <h3>{props.title}</h3>
    <p>{props.body}</p>
    <button onClick={() =>
      props.onSubscribeClick()
      }
    >SUBSCRIBE TODAY</button>
  </div>
  );

export default SubscribeBlock;
