// 279
import React, { Fragment } from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  console.log("chid", props.children);
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
