import { useState, useEffect } from "react";
import styles from "./Card.module.css";

const Card = ({ acc, dat, onCheck, success, originalData }) => {
  const [accValue, setAccValue] = useState("");
  const [datValue, setDatValue] = useState("");
  useEffect(() => {
    setAccValue("");
    setDatValue("");
  }, [acc]);
  return (
    <div className={styles.wrapper}>
      ACCUSATIVE:
      <div className={styles.outer_container}>
        <div
          className={[
            styles.container,
            success.acc
              ? styles.correct
              : success.acc === false
              ? styles.wrong
              : "",
          ].join(" ")}
        >
          <div className={styles.inner_container}>
            <div>{acc[0]}</div>
            <input
              type={"text"}
              value={accValue}
              onChange={(e) => setAccValue(e.target.value)}
              disabled={success.acc !== undefined}
            />
            <div>{acc[1]}</div>
          </div>
          {success.acc === false && (
            <div className={styles.error}>{originalData.ACCUSATIVE}</div>
          )}
        </div>
        <button
          onClick={(e) => {
            onCheck("acc", accValue);
          }}
          disabled={success.acc !== undefined}
        >
          CHECK
        </button>
      </div>
      DATIVE:
      <div className={styles.outer_container}>
        <div
          className={[
            styles.container,
            success.dat
              ? styles.correct
              : success.dat === false
              ? styles.wrong
              : "",
          ].join(" ")}
        >
          <div className={styles.inner_container}>
            <div>{dat[0]}</div>
            <input
              type={"text"}
              value={datValue}
              onChange={(e) => setDatValue(e.target.value)}
              disabled={success.dat !== undefined}
            />
            <div>{dat[1]}</div>
          </div>
          {success.dat === false && (
            <div className={styles.error}>{originalData.DATIVE}</div>
          )}
        </div>
        <button
          onClick={(e) => {
            onCheck("dat", datValue);
          }}
          disabled={success.dat !== undefined}
        >
          CHECK
        </button>
      </div>
    </div>
  );
};

export default Card;
