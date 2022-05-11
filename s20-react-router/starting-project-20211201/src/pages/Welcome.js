// 268
import React from "react";
import { Link, Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Link to="/welcome/new-user">new user</Link>

      <Route exact path="/welcome/new-user">
        <h2>Bienvenido, nuevo usuario</h2>
      </Route>
    </section>
  );
};

export default Welcome;
