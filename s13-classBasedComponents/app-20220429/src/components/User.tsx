import { Component } from "react";
import classes from "./User.module.css";

// const User = ({ name = "" }) => {
//   return <li className={classes.user}>{name}</li>;
// };

// export default User;

// export default class User extends Component {
//   render() {
//     return (
//       <div>User</div>
//     )
//   }
// }

type Props = {
  name: string;
};
export default class User extends Component<Props> {
  render() {
    const { name } = this.props;

    return <li className={classes.user}>{name}</li>;
  }
}
