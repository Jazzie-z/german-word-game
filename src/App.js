import Article from "./Games/Article/Article";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate, useRoutes } from "react-router";
import Home from "./Home";
import Phrases from "Games/Phrases/Phrases";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {pathname !== "/" && (
        <span className={styles.back} onClick={() => navigate("/")}>
          &#8592;
        </span>
      )}
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="article" element={<Article />} />
          <Route path="phrases" element={<Phrases />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
