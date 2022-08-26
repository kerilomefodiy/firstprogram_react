import React from "react";
import classes from "./MyBotton.module.css";

export default function MyBotton({ children, ...props }) {
  return (
    <button {...props} className={classes.btn}>
      {children}
    </button>
  );
}
