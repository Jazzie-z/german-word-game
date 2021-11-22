import Card from "./Card";
import Word from "./Word";
import { WORDS } from "assets/words";
import { useEffect, useState } from "react";
import ScoreBoard from "Games/Common/ScoreBoard";
import Selector from "./Selector";
import ControlPanel from "./ControlPanel";

export const CHANGE_TIME = 2000;
const categories = Object.keys(WORDS);
let wordArray = [];
const generateNewWord = ({ from, to }, category) => {
  const keys = Object.keys(WORDS[category]).slice(from, to);
  if (wordArray.length === keys.length) {
    return { english: "", german: "", article: "" };
  }
  const key = keys[Math.floor(Math.random() * keys.length)];
  if (wordArray.includes(key)) {
    return generateNewWord({ from, to }, category);
  } else {
    wordArray.push(key);
    const newWord = WORDS[category][key].s;
    const article = newWord.slice(0, 3);
    const german = newWord.slice(4);
    return { english: `(The ${key})`, german, article };
  }
};

function Article() {
  const [activeCategory, setActiveCategory] = useState("TIME");
  const [newWord, setNewWord] = useState();
  const { english, german, article } = newWord || {};
  const [score, setScore] = useState(0);
  const [limit, setLimit] = useState({ from: 0, to: 100 });
  const [threshold, setThreshold] = useState({ from: 0, to: 100 });
  useEffect(() => {
    wordArray = [];
    setNewWord(generateNewWord(threshold, activeCategory));
    setScore(0);
  }, [threshold, activeCategory]);
  const updateNewWord = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
    const totalWordsInCategory = Object.keys(WORDS[activeCategory]).length;
    if (totalWordsInCategory === wordArray.length) {
      let index = categories.findIndex((e) => e === activeCategory);
      setActiveCategory(categories[index + 1] || categories[0]);
    } else {
      const word = generateNewWord(threshold, activeCategory);
      setNewWord(word);
    }
  };
  useEffect(() => {
    const prevScore = localStorage.getItem("HIGH_SCORE");
    if (score > prevScore) localStorage.setItem("HIGH_SCORE", score);
  }, [score]);

  if (!newWord) return null;
  return (
    <>
      {/* <ControlPanel
        wordArray={wordArray}
        limit={limit}
        setLimit={setLimit}
        setThreshold={setThreshold}
      /> */}
        <Selector active={activeCategory} setActive={setActiveCategory} />
        <ScoreBoard
          score={score}
          total={Object.keys(WORDS[activeCategory]).length}
        />
        <Card article={article} updateNewWord={updateNewWord} />
        <Word english={english} german={german} number={wordArray.length} />
    </>
  );
}

export default Article;
