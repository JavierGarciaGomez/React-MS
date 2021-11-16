import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, { AuthContextProvider } from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   // 111
  //   localStorage.setItem("isLoggedIn", "LoggedIn");
  //   setIsLoggedIn(true);
  // };

  // useEffect(() => {
  //   const storedLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (storedLoggedIn === "LoggedIn") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const contextData = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <MainHeader />
      <main>
        {!contextData.isLoggedIn && <Login />}
        {contextData.isLoggedIn && <Home />}
      </main>
    </AuthContextProvider>
  );
}

export default App;
