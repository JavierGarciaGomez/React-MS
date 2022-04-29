import React from "react";

type Props = {
  show: boolean;
};

export const DemoOutput = React.memo(({ show }: Props) => {
  console.log("DEMO OUTPUT RUNNING");
  return <p>{show && "This is new!"}</p>;
});
