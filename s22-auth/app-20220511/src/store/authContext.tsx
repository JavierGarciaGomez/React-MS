import { createContext, useCallback, useEffect, useState } from "react";

let logoutTimer: NodeJS.Timeout | null;

type State = {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string, expirationTime: string) => void;
  logout: () => void;
};

type Props = {
  children: JSX.Element | JSX.Element;
};
const initialState: State = {
  token: "",
  isLoggedIn: false,
  login: (token, expirationTime) => {},
  logout: () => {},
};

export const AuthContext = createContext(initialState);

const calculateRemainingTime = (expirationTime: string) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  const remainingTime = calculateRemainingTime(storedExpirationDate!);

  if (remainingTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = ({ children }: Props) => {
  const tokenData = retrieveStoredToken();
  let initialToken: null | string;
  if (tokenData) {
    initialToken = tokenData?.token;
  } else {
    initialToken = null;
  }
  const [token, setToken] = useState<null | string>(initialToken);

  const userIsLoggedIn = !!token;

  const handleLogout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const handleLogin = (token: string, expirationTime: string) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime.toString());
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(handleLogout, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(handleLogout, tokenData.duration);
    }
  }, [tokenData, handleLogout]);

  const contextValue: State = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
