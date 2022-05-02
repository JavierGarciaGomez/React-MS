import { Fragment, MouseEvent, MouseEventHandler } from "react";
import { Task } from "../../interfaces/interfaces";
import Section from "../UI/Section";
import TaskItem from "./TaskItem";
import classes from "./Tasks.module.css";

type RequestConfig = {
  url: string;
  method?: string;
  headers?: {};
  body?: { text: string };
};
type ApplyData = (data: any) => void;
type Props = {
  items: Task[];
  error: string | null;
  onFetch: (
    requestConfig: RequestConfig,
    applyData: ApplyData
  ) => Promise<void>;
  loading: boolean;
};

const Tasks = (props: Props) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task) => (
          <TaskItem key={task.id}>
            <Fragment>{task.text}</Fragment>
          </TaskItem>
        ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    // content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = <Fragment> "Loading tasks..."</Fragment>;
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
