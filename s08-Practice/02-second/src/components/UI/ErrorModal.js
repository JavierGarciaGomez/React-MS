// 97
import React from "react";
import { Button } from "./Button";
import { Card } from "./Card";

const ErrorModal = ({ title, message, onConfirm }) => {
  console.log(onConfirm);
  return (
    <div className="backdrop">
      <Card className="modal">
        <header className="header">
          <h2>{title}</h2>
        </header>
        <div className="content">
          <p>{message}</p>
        </div>
        <footer className="actions">
          <Button onClick={onConfirm} clickHandler={onConfirm}>
            Ok
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
