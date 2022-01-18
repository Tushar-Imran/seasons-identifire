import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    result: "You are in Summer Season!",
    iconName: "sun",
  },
  winter: {
    result: "You are in Winter Season!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SesonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { result, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1> {result} </h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SesonDisplay;
