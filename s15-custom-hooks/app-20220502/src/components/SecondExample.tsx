import React, { useCallback, useEffect, useState } from "react";
import { useHttp } from "../hooks/useHttp";

import { Task } from "../interfaces/interfaces";

import NewTask from "./NewTask/NewTask";
import Tasks from "./Tasks/Tasks";
type tasksState = Task[];

export const SecondExample = () => {
  const [tasks, setTasks] = useState<tasksState>([]);

  const requestConfig = {
    url: "https://tests-project-8925d-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
  };

  const { sendRequest: fetchTasks, isLoading, error } = useHttp();

  const taskAddHandler = (task: Task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  useEffect(() => {
    const transformTaks = (data: any) => {
      const loadedTasks = [];
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(requestConfig, transformTaks);
  }, []);

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
};
