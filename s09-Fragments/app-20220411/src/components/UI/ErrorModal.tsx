import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { Card } from "./Card";
import classes from "./ErrorModal.module.css";

interface Props {
  onConfirm: () => void;
  title: string;
  message: string;
}

interface BackdropProps {
  onConfirm: () => void;
}

const Backdrop = (props: BackdropProps) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props: Props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

export const ErrorModal = (props: Props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")!
      )}
      {createPortal(
        <ModalOverlay {...props} />,
        document.getElementById("overlay-root")!
      )}
    </Fragment>
  );
};
