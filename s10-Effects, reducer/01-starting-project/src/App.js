// ..., 110. 124
import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthContext } from "./store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const localStorageIsLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (localStorageIsLoggedIn === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // // ..., 110
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways

  //   // 110
  //   localStorage.setItem("isLoggedIn", "1");

  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const context = useContext(AuthContext);
  return (
    <React.Fragment>
      {/* 121 */}
      {/* <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }}
      > */}
      <MainHeader />

      <main>
        {!context.isLoggedIn && <Login />}
        {context.isLoggedIn && <Home />}
      </main>
      {/* </AuthContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
