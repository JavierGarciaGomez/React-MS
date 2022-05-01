import React, { Component } from "react";
import { useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

type State = {
  showUsers: boolean; // like this
};
type Props = { users: { id: string; name: string }[] };

export default class Users extends Component<Props> {
  state = {
    showUsers: true,
    more: "Test",
  };

  toggleUsersHandler = () => {
    this.setState((prev) => ({ ...prev, showUsers: this.state.showUsers }));
  };
  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}
