// 187

import React, { useEffect, useState } from "react";

const useCounter = (x) => {
  console.log(x);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + x);
    }, 1000);

    return () => clearInterval(interval);
  }, [x]);
  return counter;
};

export default useCounter;
