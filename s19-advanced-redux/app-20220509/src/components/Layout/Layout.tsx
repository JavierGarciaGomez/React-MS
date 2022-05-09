import { Fragment } from "react";
import MainHeader from "./MainHeader";

type Props = {
  children: JSX.Element | JSX.Element[];
};
const Layout = (props: Props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
