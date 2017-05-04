import React from 'react';
import './Modal.css';

const Modal = props => (
  <div className="modal">
    <div className="background" />
    <div className="modal-dialog">
      {props.children}
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </div>
  </div>
  );

export default Modal;
