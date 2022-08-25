import React from "react";
import './Bar.css'

{
  /* <Bar
  key={dataPoint.label}
  value={dataPoint.value}
  maxValue={null}
  label={dataPoint.label}
/>; */
}

function Bar(props) {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="hart-bar__label">{props.label}</div>
    </div>
  );
}

export default Bar;