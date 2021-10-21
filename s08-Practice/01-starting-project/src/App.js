// ..., 95
import React from "react";
import { useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";

const users = [
  { name: "John", age: 33, id: "1" },
  { name: "Joan", age: 20, id: "2" },
];

function App() {
  const [usersList, setusersList] = useState(users);
  // 95
  const addUser = (newUser) => {
    setusersList((previousUsers) => [newUser, ...previousUsers]);
  };

  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
