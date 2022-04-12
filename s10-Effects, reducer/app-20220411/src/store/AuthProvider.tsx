import { useReducer } from "react";
import { AuthState } from "../interfaces/interfaces";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const INITIAL_STATE: AuthState = {
  isLoggedIn: false,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(authReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
