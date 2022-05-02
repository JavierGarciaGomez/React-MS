import { Fragment, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import { Task } from "../../interfaces/interfaces";
import Section from "../UI/Section";

import TaskForm from "./TaskForm";

type Props = {
  onAddTask: (createdTask: Task) => void;
};

const NewTask = (props: Props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const enterTaskHandler = async (taskText: string) => {
    const createTask = (taskData: any) => {
      const generatedId = taskData.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    };

    sendTaskRequest(
      {
        url: "https://tests-project-8925d-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      <Fragment>{error && <p>{error}</p>}</Fragment>
    </Section>
  );
};

export default NewTask;
