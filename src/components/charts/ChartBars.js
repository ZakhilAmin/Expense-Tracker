import React from "react";
import "./ChartBars.css";

const ChartBars = (props) => {
  let barChartHeight = "0%";

  if (props.maxVal > 0) {
    barChartHeight = Math.round((props.value / props.maxVal) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barChartHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBars;
