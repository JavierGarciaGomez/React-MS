import React, { useContext } from "react";
import { AuthContext } from "../../store/AuthContext";

import classes from "./Navigation.module.css";

const Navigation = (props: any) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;