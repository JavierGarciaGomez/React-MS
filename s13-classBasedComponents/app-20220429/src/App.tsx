import React from "react";
import Users from "./components/Users";
import logo from "./logo.svg";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function App() {
  return (
    <div>
      <Users users={DUMMY_USERS} />
    </div>
  );
}

export default App;
