import TextBoard from "./TextBoard";
import { PHRASES } from "assets/phrases";
import { useEffect, useState } from "react";
import ScoreBoard from "Games/Common/ScoreBoard";

let phraseArray = [];
const generateNewPhrase = () => {
  if (phraseArray.length === PHRASES.length) {
    return { finished: true };
  }
  const newPhrase = PHRASES[Math.floor(Math.random() * PHRASES.length)];

  if (phraseArray.find((e) => e.en === newPhrase.en)) {
    return generateNewPhrase();
  } else {
    phraseArray.push(newPhrase);
    return newPhrase;
  }
};

const Phrases = () => {
  const [phrase, setNewPhrase] = useState({});
  const [result, setResult] = useState(null);
  const [value, setValue] = useState("");
  const [score, setScore] = useState(0);
  useEffect(() => {
    if (!result) {
      setNewPhrase(generateNewPhrase());
    }
  }, [result]);

  useEffect(() => {
    return () => {
      phraseArray = [];
      setNewPhrase({});
      setValue("");
    };
  }, []);

  const onSubmitHandler = (str = "") => {
    if (str.trim().toLowerCase() === phrase.de.trim().toLowerCase()) {
      setScore((prev) => prev + 1);
      setResult({ success: true });
    } else {
      setResult({ success: false });
    }
    setTimeout(() => {
      setResult(null);
      setValue("");
    }, 3000);
  };
  return (
    <>
      <ScoreBoard score={score} total={PHRASES.length} />
      <TextBoard
        phrase={phrase}
        result={result}
        onSubmit={onSubmitHandler}
        value={value}
        setValue={setValue}
        number={phraseArray.length}
      />
    </>
  );
};

export default Phrases;
