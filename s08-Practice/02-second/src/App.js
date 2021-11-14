import React, { useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UserList } from "./components/Users/UserList";

function App() {
  const [users, setusers] = useState([]);

  const addUser = (user) => {
    console.log("adding new user", user);
    setusers((prevUsers) => {
      return [...prevUsers, user];
    });
    console.log(users);
  };
  return (
    <div>
      <AddUser addUser={addUser}></AddUser>
      <UserList users={users} />
    </div>
  );
}

export default App;
