import React, { Fragment } from "react";
import { Button } from "./Button";
import { Card } from "./Card";
import classes from "./ErrorModal.module.css";

interface Props {
  onConfirm: () => void;
  title: string;
  message: string;
}

export const ErrorModal = (props: Props) => {
  return (
    <Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm} />
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
    </Fragment>
  );
};
