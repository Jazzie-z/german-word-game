import Number from "Games/Common/Number";
import styles from "./TextBoard.module.css";

const TextBoard = ({ phrase, result, onSubmit, value, setValue, number }) => {
  const { en, de, finished } = phrase;

  return (
    <form className={styles.container}>
      <div className={styles.card}>{en || "Congratulation"}</div>
      <div className={styles.input_container}>
        <Number number={number} />
        {finished ? (
          <div className={styles.finish}>{"GAME OVER !!!"}</div>
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!!result}
            autoFocus={true}
          />
        )}
      </div>
      <button
        className={[styles.button, !value ? styles.disabled : ""].join(" ")}
        onClick={() => onSubmit(value)}
        disabled={!!result || !value}
      >
        Check
      </button>
      {result &&
        (result.success ? (
          <div className={styles.correct}>Correct</div>
        ) : (
          <div className={styles.wrong}>
            <div>{de}</div>
          </div>
        ))}
    </form>
  );
};

export default TextBoard;
