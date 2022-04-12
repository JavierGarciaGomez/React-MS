import { AuthState } from "../interfaces/interfaces";

type AuthAction =
  | {
      type: "login";
    }
  | { type: "logout" };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "login":
      return {
        isLoggedIn: true,
      };

    case "logout":
      return {
        isLoggedIn: false,
      };

    default:
      return state;
  }
};
