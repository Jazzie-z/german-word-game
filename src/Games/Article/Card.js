import React, { useState } from "react";
import "./Card.css";
import { CHANGE_TIME } from "./Article";

const getClassNames = ({ article, active, value }) => {
  if (active) {
    if (active && article === value) return "green";
    if (active === value) return "red";
  }
  return "";
};
const Card = ({ article, updateNewWord }) => {
  const [active, setActive] = useState(null);
  const onClickHandler = (value) => {
    if (!active) {
      setActive(value);
      setTimeout(() => {
        setActive(null);
        updateNewWord(article === value);
      }, CHANGE_TIME);
    }
  };

  return (
    <div className={"card_container"}>
      {["Der", "Die", "Das"].map((value, index) => (
        <div
          className={["card", getClassNames({ article, active, value })].join(
            " "
          )}
          key={index}
          onClick={() => onClickHandler(value)}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default Card;
