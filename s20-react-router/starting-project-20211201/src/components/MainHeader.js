import React from "react";
import { Link, NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/welcome" activeClassName="active">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
