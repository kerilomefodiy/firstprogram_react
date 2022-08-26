import React from "react";
import classes from "./ModalButton.module.css";

export default function ModalButton({ sound, children, ...props }) {
  let rootClasses = () => {
    if (sound === true) {
      return classes.modalButton;
    }
    if (sound === false) {
      return classes.active;
    }
  };
  return (
    <button
      {...props}
      // className={classes.modalButton}
      className={rootClasses()}
    >
      {children}
    </button>
  );
}
