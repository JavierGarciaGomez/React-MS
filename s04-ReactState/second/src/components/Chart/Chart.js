// 67
import React from "react";
import { ChartBar } from "./ChartBar";
import "./Chart.css";
import "./ChartBar.css";

export const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  console.log("max", totalMaximum, dataPoints);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          dataPoint={dataPoint}
          maxValue={totalMaximum}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};
