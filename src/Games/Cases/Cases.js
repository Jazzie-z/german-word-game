import { CASES } from "assets/cases";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import styles from "./Cases.module.css";

const ACC_WORDS = [
  "ins",
  "in die",
  "in den",
  "auf die",
  "auf den",
  "an die",
  "an den",
  "ans",
];

const DATIVE_WORDS = ["im", "in der", "auf dem", "am", "an der"];
let phraseArray = [];
const transform = (data) => {
  const { ACCUSATIVE, DATIVE } = data;
  let accWord = ACC_WORDS.find((e) => ACCUSATIVE.includes(e));
  let datWord = DATIVE_WORDS.find((e) => DATIVE.includes(e));
  return {
    acc: ACCUSATIVE.split(accWord),
    dat: DATIVE.split(datWord),
    result: [accWord, datWord],
    originalData: data,
  };
};
const generateNewPhrase = () => {
  if (phraseArray.length === CASES.length) {
    return { finished: true };
  }
  const newPhrase = CASES[Math.floor(Math.random() * CASES.length)];

  if (phraseArray.find((e) => e.DATIVE === newPhrase.DATIVE)) {
    return generateNewPhrase();
  } else {
    phraseArray.push(newPhrase);
    return transform(newPhrase);
  }
};
const Cases = () => {
  const [phrase, setPhrase] = useState({
    acc: [],
    dat: [],
  });
  const [success, setSuccess] = useState({});
  useEffect(() => {
    if (Object.keys(success).length === 0) setPhrase(generateNewPhrase());
  }, [success]);
  // useEffect(() => {
  //   if (success.acc !== undefined && success.dat !== undefined) {
  //     setTimeout(() => {
  //       setSuccess({});
  //     }, 2000);
  //   }
  // }, [success]);
  const onCheckHandler = (type, str) => {
    if (type === "acc") {
      if (phrase.result[0].trim().toLowerCase() === str.trim().toLowerCase()) {
        setSuccess((prev) => ({ ...prev, acc: true }));
      } else {
        setSuccess((prev) => ({ ...prev, acc: false }));
      }
    } else {
      console.log(
        phrase.result[1].trim().toLowerCase(),
        str.trim().toLowerCase()
      );
      if (phrase.result[1].trim().toLowerCase() === str.trim().toLowerCase()) {
        setSuccess((prev) => ({ ...prev, dat: true }));
      } else {
        setSuccess((prev) => ({ ...prev, dat: false }));
      }
    }
  };
  return (
    <div className={styles.wrapper}>
      <Card
        acc={phrase.acc}
        dat={phrase.dat}
        onCheck={onCheckHandler}
        success={success}
        originalData={phrase.originalData}
      />
      <button
        className={styles.button}
        onClick={() => setSuccess({})}
        disabled={Object.keys(success).length !== 2}
      >
        Next >>
      </button>
    </div>
  );
};

export default Cases;
