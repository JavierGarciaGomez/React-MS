import React, { createContext } from "react";

type AuthContextProps = {
  isLoggedIn: boolean;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
