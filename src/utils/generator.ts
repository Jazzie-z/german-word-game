import { MEANINGS } from "@/assets/meanings";
import { WORDS } from "@/assets/words";
import { Phrase, PHRASES } from "@/assets/phrases";

export interface NewWord {
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

export const generateNewMeaning = (category: string): NewWord => {
  const keys = Object.keys(MEANINGS[category]);
  const key = keys[Math.floor(Math.random() * keys.length)];
  const newWord = MEANINGS[category][key];
  const german = newWord;
  return { english: key, german, article: "", key };
};

export const generateNewPhrase = (): Phrase =>
  PHRASES[Math.floor(Math.random() * PHRASES.length)];
