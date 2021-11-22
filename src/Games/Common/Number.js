import styles from "./Number.module.css";

const Number = ({ number }) => {
  return (
    <div className={styles.number}>
      <div>{number}</div>
    </div>
  );
};

export default Number;
