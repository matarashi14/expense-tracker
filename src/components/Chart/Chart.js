import React from "react";
import Bar from "./Bar";
import "./Chart.css";

function Chart(props) {
  const dataPointsValues = props.dataPoints.map((d) => d.value);
  const totalMax = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Bar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
