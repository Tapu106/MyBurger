import React from "react";
import classes from "./Toolbar.css";
import { render } from "react-dom";

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>MENU</div>
      <div>LOGO</div>
      <nav>....</nav>
    </header>
  );
};

export default toolbar;
