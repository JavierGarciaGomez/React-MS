import { Fragment } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

type BackdropProps = {
  onClose: () => void;
};
type ModalOverlayProps = {
  children: JSX.Element | JSX.Element[];
};

type ModalProps = {
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
};

const Backdrop = (props: BackdropProps) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays")!;

const Modal = (props: ModalProps) => {
  return (
    <Fragment>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
