// 306, 309
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/AuthContext";
import { useHistory } from "react-router";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  // 309
  const history = useHistory();
  // 306
  const authContext = useContext(AuthContext);
  const isLoggedIn = authContext.isLoggedIn;

  // 309
  const logoutHandler = () => {
    authContext.logout();
    history.replace("/");
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <Fragment>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
