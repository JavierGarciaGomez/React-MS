import React, { useContext, useEffect, useState } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { AuthProvider } from "./store/AuthProvider";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (storedLoggedIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  console.log(storedLoggedIn);

  const loginHandler = (email: string, password: string) => {
    localStorage.setItem("isLoggedIn", "1");
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  return (
    <AuthProvider>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthProvider>
  );
}

export default App;
