import React from "react";
import classes from "./Layout.module.scss";

function Layout(props) {
  return (
    <React.Fragment>
      <header>Dudluk</header>
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
