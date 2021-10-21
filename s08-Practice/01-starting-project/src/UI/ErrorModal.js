// 96
import React from "react";
import { Button } from "./Button";
import { Card } from "./Card";
import styles from "../index.module.css";

export const ErrorModal = ({ title, message, errorHandler }) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={errorHandler}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};
