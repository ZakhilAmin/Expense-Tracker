import React from "react";
import "./Charts.css";
import ChartsBars from "./ChartBars";

const Charts = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartsBars
          key={dataPoint.label}
          value={dataPoint.value}
          maxVal={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Charts;
