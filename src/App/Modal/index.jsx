import React from 'react';
import './Modal.css';

const Modal = props => (
  <div className="modal">
    <div className="background" />
    <div className="modalDialog">
      <button onClick={() => props.onCloseClick()} className="modalDialogCloseButton">x</button>
      <div className="modalDialogTitle">
        <h3>{props.title}</h3>
      </div>
      <div className="modalDialogBody">
        {props.children}
      </div>
    </div>
  </div>
  );

export default Modal;
