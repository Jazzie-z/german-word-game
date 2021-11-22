import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
const Home = () => {
  const navigate = useNavigate();

  const GAMES = [
    { title: "Aricle", path: "/article" },
    { title: "Phrases", path: "/phrases" },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>CHOOSE A GAME</div>
      <div className={styles.container}>
        {GAMES.map(({ title, path }, index) => (
          <div className={styles.card} onClick={() => navigate(path)}>
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
