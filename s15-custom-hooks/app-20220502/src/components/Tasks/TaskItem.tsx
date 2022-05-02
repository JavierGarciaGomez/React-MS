import classes from "./TaskItem.module.css";

type Props = {
  children: JSX.Element | JSX.Element[];
};
const TaskItem = (props: Props) => {
  return <li className={classes.task}>{props.children}</li>;
};

export default TaskItem;
