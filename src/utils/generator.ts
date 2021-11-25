import { WORDS } from "@/assets/words";

interface NewWord {
  english: string;
  german: string;
  article: string;
  key: string;
}
export const generateNewWord = (category: string): NewWord => {
  const keys = Object.keys(WORDS[category]);
  const key = keys[Math.floor(Math.random() * keys.length)];
  const newWord = WORDS[category][key].s;
  const article = newWord.slice(0, 3);
  const german = newWord.slice(4);
  return { english: `(The ${key})`, german, article, key };
};
