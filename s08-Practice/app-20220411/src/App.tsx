import React, { useState } from "react";
import { User } from "./components/interfaces/User";
import { Card } from "./components/UI/Card";
import { AddUser } from "./components/users/AddUser";
import UsersList from "./components/users/UserList";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const handleAddUser = (user: User) => {
    setUsers((prev) => prev.concat(user));
  };
  return (
    <>
      <AddUser onSubmit={handleAddUser} />
      <UsersList users={users} />
    </>
  );
}

export default App;
