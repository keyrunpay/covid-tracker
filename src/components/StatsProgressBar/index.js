import React from "react";
import "./style.scss";

export default function StatsProgressBar({ keyz, value, color, width }) {
  return (
    <div className="stats-progress-bar">
      <header>
        <p>{keyz}</p>
        <p>{value}</p>
      </header>
      <div className="bar full"></div>
      <div
        className="bar complete"
        style={{ backgroundColor: color, width: width }}
      ></div>
    </div>
  );
}
