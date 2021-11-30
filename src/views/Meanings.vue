<template>
  <score-board :score="score" :total="total" />
  <list>
    <mini-card
      v-for="value in categories"
      :key="value"
      :value="value"
      :active="value === activeCategory"
      @on-click="onChangeCategory"
    />
  </list>
  <form class>
    <list v-for="(word, index) in activeWordList" :key="word.key" justify="end">
      <card-with-input
        :value="`(${wordList.length - 5 + index + 1}) ` + word.english"
        :correct="result[word.key]?.correct"
        :wrong="result[word.key]?.wrong"
      />
      <card-with-input
        withInput
        :correct="result[word.key]?.correct"
        :wrong="result[word.key]?.wrong"
        @on-change="(val) => onChangeHandler(word.key, val)"
        :disabled="this.result[word.key] ? true : false"
        :answer="word.german"
      />
    </list>
    <check-button @on-click="onClickHandler" :disabled="disabled" />
  </form>
</template>
<script lang="ts">
import { MEANINGS } from "@/assets/meanings";
import { WORDS } from "@/assets/words";
import List from "@/components/collection/List.vue";
import CardWithInput from "@/components/core/CardWithInput.vue";
import CheckButton from "@/components/core/CheckButton.vue";
import MiniCard from "@/components/core/MiniCard.vue";
import ScoreBoard from "@/components/core/ScoreBoard.vue";
import { TIME_OUT } from "@/constants/constants";
import { generateNewMeaning, NewWord } from "@/utils/generator";
import { defineComponent } from "vue";
declare interface MeaningsComponentData {
  wordList: string[];
  score: number;
  activeWordList: NewWord[];
  categories: string[];
  activeCategory: string;
  gameOver: boolean;
  result: { [key: string]: { [key: string]: boolean } };
  userInputs: { [key: string]: string };
  disabled: boolean;
}
const PER_PAGE_WORDS = 5;
let timer: number;
export default defineComponent({
  components: {
    CardWithInput,
    List,
    CheckButton,
    ScoreBoard,
    MiniCard,
  },
  data(): MeaningsComponentData {
    const categories: string[] = Object.keys(MEANINGS);
    return {
      wordList: [],
      activeWordList: [],
      gameOver: false,
      categories,
      activeCategory: categories[0],
      score: 0,
      result: {},
      userInputs: {},
      disabled: false,
    };
  },
  computed: {
    //multiple props
    total(): number {
      return Object.keys(MEANINGS[this.activeCategory]).length;
    },
  },
  watch: {
    result: {
      deep: true,
      handler(newValue): void {
        if (Object.keys(newValue).length === PER_PAGE_WORDS) {
          this.disabled = true;
          Object.keys(newValue).forEach((key) => {
            if (newValue[key].correct) {
              this.score++;
            }
          });
          setTimeout(() => {
            this.disabled = false;
            this.activeWordList = [];
            this.result = {};
            this.userInputs = {};
            this.getNewList();
          }, TIME_OUT);
        }
      },
    },
    activeCategory(): void {
      clearTimeout(timer);
      this.activeWordList = [];
      this.wordList = [];
      this.result = {};
      this.userInputs = {};
      this.score = 0;
      this.getNewList();
      this.gameOver = false;
    },
  },
  methods: {
    getNewList(): void {
      if (this.wordList.length === Object.keys(WORDS).length) {
        if (this.activeWordList.length) {
          this.result = {};
        } else {
          this.gameOver = true;
          return;
        }
      }
      let { english, german, article, key } = generateNewMeaning(
        this.activeCategory
      );
      if (this.wordList.includes(english + german)) {
        this.getNewList();
      } else {
        this.wordList.push(english + german);
        this.activeWordList.push({ english, german, article, key });
      }
      if (this.activeWordList.length < PER_PAGE_WORDS) {
        this.getNewList();
      }
    },
    onChangeCategory(value: string): void {
      this.activeCategory = value;
    },
    onChangeHandler(key: string, value: string): void {
      this.userInputs[key] = value;
    },
    onClickHandler(): void {
      this.activeWordList.forEach(({ key, german }) => {
        if (this.userInputs[key]?.trim()) {
          const correct =
            this.userInputs[key]?.trim().toLowerCase() ===
            german.trim().toLowerCase();
          this.result[key] = {
            correct: correct,
            wrong: !correct,
          };
        }
      });
    },
  },
  mounted() {
    this.getNewList();
  },
  name: "Meanings",
});
</script>
<style lang="scss"></style>
