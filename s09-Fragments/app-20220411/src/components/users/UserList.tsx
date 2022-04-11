import React from "react";
import { User } from "../interfaces/User";
import { Card } from "../UI/Card";

import classes from "./UsersList.module.css";

interface Props {
  users: User[];
}
const UsersList = ({ users }: Props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.username}>
            {user.username} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
