// 154

import React, { memo } from "react";

const DemoOutput = ({ show }) => {
  console.log("rendering DemoOutput");
  return <div>{show && <p>This is new</p>}</div>;
};

export default memo(DemoOutput);
