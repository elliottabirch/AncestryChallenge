import React from 'react';
import './CollectionBlock.css';


const CollectionBlock = (props) => {
  const collection = (props.collection && props.collection.map((item, index) => <li key={`${item}${index}`}><a>{item}</a></li>));

  return (
    <div>
      <h2>{props.title && props.title}</h2>
      <ul>{collection}</ul>
      <button>SEE ALL COLLECTIONS</button>
    </div>
  );
};

export default CollectionBlock;
