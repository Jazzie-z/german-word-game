import React from "react";
import "./ScoreBoard.css";
const ScoreBoard = ({ score, total }) => {
  return <div className={"board"}>{`${score} / ${total}`}</div>;
};

export default ScoreBoard;
