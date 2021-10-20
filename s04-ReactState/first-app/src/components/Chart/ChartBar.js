import React from "react";
import "./ChartBar.css";

export const ChartBar = ({ dataPoint, maxValue }) => {
  console.log(dataPoint, maxValue);
  const { label, value } = dataPoint;
  console.log("value and max", value, maxValue);
  let barfillHeight = "0%";
  if (maxValue > 0) {
    barfillHeight = Math.round((value / maxValue) * 100) + "%";
    console.log("bfh", barfillHeight);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barfillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};
