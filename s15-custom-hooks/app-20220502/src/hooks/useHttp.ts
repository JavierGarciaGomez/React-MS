import React, { useCallback, useEffect, useState } from "react";
import { Task } from "../interfaces/interfaces";

type ErrorState = string | null;
type tasksState = Task[];
type RequestConfig = {
  url: string;
  method?: string;
  headers?: {};
  body?: { text: string };
};
type ApplyData = (data: any) => void;

// "https://tests-project-8925d-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorState>(null);

  const sendRequest = useCallback(
    async (requestConfig: RequestConfig, applyData: ApplyData) => {
      const { url, method, headers, body } = requestConfig;
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, {
          method: method ? method : "GET",
          headers: headers ? headers : {},
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        applyData(data);

        // const loadedTasks = [];

        // for (const taskKey in data) {
        //   loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        // }

        // setTasks(loadedTasks);
      } catch (err) {
        let message = "Unknown Error";
        if (err instanceof Error) message = err.message;
        setError(message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return { isLoading, sendRequest, error };
};
