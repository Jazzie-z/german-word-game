import { useNavigate } from "react-router-dom";
import styles from "./GameSelector.module.css";
const GameSelector = ({ games }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>CHOOSE A GAME</div>
      <div className={styles.container}>
        {games.map((title, index) => (
          <div
            className={styles.card}
            onClick={() => navigate(`${title.toLowerCase()}`)}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSelector;
