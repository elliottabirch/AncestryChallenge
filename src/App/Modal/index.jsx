import React from 'react';
import './Modal.css';

const Modal = props => (
  <div className="modal">
    <div className="background" />
    <div className="modalDialog">
      <svg onClick={() => props.onCloseClick()} className="modalDialogCloseButton" width="22px" height="22px" viewBox="576 -63 28 28">
        <path d="M590.088014,-50.0862086 L586.885519,-53.6383159 L586.142808,-52.9687048 L589.413611,-49.3408308 L586.093633,-45.6714521 L586.835163,-45.0005317 L590.086698,-48.5942643 L593.281263,-45.0509518 L594.023975,-45.7205629 L590.7611,-49.3396421 L593.976142,-52.8930413 L593.234613,-53.5639618 L590.088014,-50.0862086 Z M590,-36 C582.820298,-36 577,-41.8202983 577,-49 C577,-56.1797017 582.820298,-62 590,-62 C597.179702,-62 603,-56.1797017 603,-49 C603,-41.8202983 597.179702,-36 590,-36 Z" id="Combined-Shape" stroke="#F7F7F7" strokeWidth="1" fill="#756E68" fillRule="evenodd" />
      </svg>
      <div className="modalDialogTitle">
        {props.title}
      </div>
      <div className="modalDialogBody">
        {props.children}
      </div>
    </div>
  </div>
  );

export default Modal;
