// 140
import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({ toggleShowCart }) => {
  return <div className={classes.backdrop} onClick={toggleShowCart}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, toggleShowCart }) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop toggleShowCart={toggleShowCart} />,
        portalElement
      )}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
