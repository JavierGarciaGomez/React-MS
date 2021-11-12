// ... , 121

import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  // 122
  const contextData = useContext(AuthContext);
  console.log("context", contextData);
  return (
    // 121
    // <AuthContext.Consumer>

    // {(contextData) => {
    //   console.log(contextData);
    //   return (
    <nav className={classes.nav}>
      <ul>
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {contextData.isLoggedIn && (
          <li>
            <button onClick={contextData.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
    // );
    // }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
