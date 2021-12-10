// ..., 307, 308
import { useContext, useRef } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../store/AuthContext";
import { apiKey } from "../Auth/AuthForm";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  // 307
  const history = useHistory();
  const newPasswordInputRef = useRef();

  const authContext = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCCMNvKN0hfNGY2a20Zy-c7mz0VlVar-HE`,
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authContext.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      history.replace("/");
      // assumption: always succeeds!
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          ref={newPasswordInputRef}
          minLength="6"
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
