<template>
  <div class="article__container">
    <list>
      <mini-card
        v-for="value in categories"
        :key="value"
        :value="value"
        :active="value === activeCategory"
        @on-click="onChangeCategory"
      />
    </list>
    <score-board :score="score" :total="total" />
    <list>
      <vertical-card
        v-for="value in articles"
        :key="value"
        :value="value"
        @on-click="onClickHandler"
        :correct="isCorrect(value)"
        :wrong="isWrong(value)"
        :disabled="!!activeValue || gameOver"
      />
    </list>
    <horizontal-card
      :value="german"
      :description="english"
      :number="wordList.length"
      :gameOver="gameOver"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ScoreBoard from "@/components/core/ScoreBoard.vue";
import { generateNewWord } from "@/utils/generator";
import VerticalCard from "@/components/core/VerticalCard.vue";
import List from "@/components/collection/List.vue";
import HorizontalCard from "@/components/core/HorizontalCard.vue";
import { TIME_OUT } from "@/constants/constants";
import { WORDS } from "@/assets/words";
import MiniCard from "@/components/core/MiniCard.vue";

let timer: number;
declare interface ArticleComponentData {
  wordList: string[];
  english: string;
  german: string;
  score: number;
  articles: string[];
  activeValue: string;
  article: string;
  correct: boolean;
  wrong: boolean;
  categories: string[];
  activeCategory: string;
  gameOver: boolean;
}

export default defineComponent({
  components: {
    ScoreBoard,
    VerticalCard,
    List,
    HorizontalCard,
    MiniCard,
  },
  data(): ArticleComponentData {
    const categories: string[] = Object.keys(WORDS);
    return {
      wordList: [] as string[],
      english: "",
      german: "",
      score: 0,
      articles: ["Der", "Die", "Das"],
      activeValue: "",
      article: "",
      correct: false,
      wrong: false,
      categories,
      activeCategory: categories[0],
      gameOver: false,
    };
  },
  computed: {
    total(): number {
      return Object.keys(WORDS[this.activeCategory]).length;
    },
  },
  watch: {
    activeValue(newValue: string): void {
      if (newValue) {
        if (this.isCorrect(this.activeValue)) this.score++;
        timer = setTimeout(() => {
          this.activeValue = "";
          this.getNewWord();
        }, TIME_OUT);
      }
    },
    activeCategory(): void {
      clearTimeout(timer);
      this.activeValue = "";
      this.wordList = [];
      this.score = 0;
      this.getNewWord();
      this.gameOver = false;
    },
  },

  methods: {
    getNewWord(): void {
      if (
        this.wordList.length === Object.keys(WORDS[this.activeCategory]).length
      ) {
        this.gameOver = true;
        return;
      }
      let { key, english, german, article } = generateNewWord(
        this.activeCategory
      );
      if (this.wordList.includes(key)) {
        this.getNewWord();
      } else {
        this.wordList.push(key);
        this.english = english;
        this.german = german;
        this.article = article;
      }
    },
    onClickHandler(value: string): void {
      this.activeValue = value;
    },
    onChangeCategory(value: string): void {
      this.activeCategory = value;
    },
    isCorrect(value: string): boolean {
      return this.activeValue ? this.article === value : false;
    },
    isWrong(value: string): boolean {
      return !this.isCorrect(value) && this.activeValue === value;
    },
  },
  mounted(): void {
    this.getNewWord();
  },
  name: "Article",
});
</script>
<style lang="css" scoped>
.article__container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
