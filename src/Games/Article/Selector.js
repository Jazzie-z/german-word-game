import React from "react";
import { WORDS } from "assets/words";
import styles from "./Selector.module.css";
const Selector = ({ active, setActive }) => {
  const titles = Object.keys(WORDS);
  return (
    <div className={styles.container}>
      {titles.map((title, i) => (
        <div
          className={[styles.card, active === title ? styles.active : ""].join(
            " "
          )}
          onClick={() => setActive(title)}
          key={title + i}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

export default Selector;
