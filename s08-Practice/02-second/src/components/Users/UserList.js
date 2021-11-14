// 95
import React from "react";
import { Card } from "../UI/Card";

export const UserList = ({ users }) => {
  return (
    <Card className="users">
      <ul>
        {users.map((user) => {
          return (
            <li>
              {user.username}({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
