import React from "react";
import { ChartBar } from "./ChartBar";
import "./Chart.css";
import { DataPoint } from "../../models/DataPoint";

interface Props {
  dataPoints: DataPoint[];
}
export const Chart = ({ dataPoints }: Props) => {
  const dataPointValues = dataPoints.map((element) => element.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          dataPoint={dataPoint}
          key={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};
