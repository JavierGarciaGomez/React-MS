import { Fragment } from "react";

import classes from "./Layout.module.css";
import { MainNavigation } from "./MainNavigation";

type Props = {
  children: JSX.Element | JSX.Element[];
};
const Layout = (props: Props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
