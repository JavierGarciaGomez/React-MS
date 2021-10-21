// 94
import React from "react";
import { Card } from "../../UI/Card";
import styles from "../../index.module.css";

export const UsersList = ({ users }) => {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age})
          </li>
        ))}
      </ul>
    </Card>
  );
};
