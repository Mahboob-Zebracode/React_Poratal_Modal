import React from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ show, close }) => {
  return ReactDom.createPortal(
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header" id>
        <p>Welcome To Our Site</p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Modal</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            veniam minus quis quisquam id delectus enim odit ad repellendus
            quae.
          </p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">
            Close
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
