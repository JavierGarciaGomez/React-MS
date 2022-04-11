import React, {
  DetailedHTMLProps,
  FormEvent,
  Fragment,
  InputHTMLAttributes,
  useRef,
  useState,
} from "react";
import { UseForm } from "../../hooks/UseForm";
import { ErrorInt } from "../interfaces/ErrorInt";

import { User } from "../interfaces/User";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import { ErrorModal } from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

interface Props {
  onSubmit: (user: User) => void;
}

export const AddUser = ({ onSubmit }: Props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<ErrorInt | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (formData.username.trim().length === 0) {
      setError({ title: "Invalid", message: "username must not be empty" });
      return;
    }

    console.log("hey", formData);
    onSubmit(formData);
    handleReset();
  };

  const { formData, handleChange, handleReset } = UseForm<User>({
    username: "",
    age: "",
  });
  const { age, username } = formData;

  const handleErrorConfirm = () => {
    setError(null);
  };
  return (
    <Fragment>
      {error && (
        <ErrorModal
          onConfirm={handleErrorConfirm}
          title={"Error"}
          message={"Something went wrong"}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={handleChange}
            value={username}
            name="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">age</label>
          <input
            id="age"
            type="number"
            onChange={handleChange}
            value={age}
            name="age"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
          {/* <button type="submit">Add User</button> */}
        </form>
      </Card>
    </Fragment>
  );
};
