import React from 'react';
import './CollectionBlock.css';


const CollectionBlock = (props) => {
  const collection = (props.collection && props.collection.map((item, index) => <div className="collectionItem" key={`${item}${index}`}><a>{item}</a></div>));

  return (
    <div className="collectionBlock">
      <div className="collectionBlockTitle">{props.title && props.title}</div>
      {collection}
      <button className="seeCollectionsButton">SEE ALL COLLECTIONS</button>
    </div>
  );
};

export default CollectionBlock;
