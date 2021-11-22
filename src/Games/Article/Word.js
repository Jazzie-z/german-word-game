import React from "react";
import "./Word.css";
import Number from "../Common/Number";

const Word = ({ english, german, number }) => {
  return (
    <div className={"word_board"}>
      <Number number={number} />
      {!german && <div>GAME OVER</div>}
      <div>{german}</div>
      <div>{english}</div>
    </div>
  );
};

export default Word;
