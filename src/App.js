import Article from "./Games/Article/Article";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";
import GameSelector from "./GameSelector";
import Phrases from "Games/Phrases/Phrases";
import Cases from "Games/Cases/Cases";

const GAMES = ["Article", "Phrases", "Cases"];

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {pathname !== "/" && (
        <span className={styles.back} onClick={() => navigate(-1)}>
          &#8592;
        </span>
      )}
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<GameSelector games={GAMES} />} />
          <Route path="article" element={<Article />} />
          <Route path="phrases" element={<Phrases />} />
          <Route path="cases" element={<Cases />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
