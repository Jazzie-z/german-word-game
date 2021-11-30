<template>
  <score-board :score="score" :total="total" />
  <form class="container" v-on:submit.prevent="onSubmit">
    <horizontal-card :value="english" :correct="correct" :wrong="wrong" />
    <horizontal-card
      withInput
      :number="wordList.length"
      :value="wrong && german"
      @on-change="onChange"
      :correct="correct"
      :wrong="wrong"
    />
  </form>
</template>
<script lang="ts">
import { PHRASES } from "@/assets/phrases";
import HorizontalCard from "@/components/core/HorizontalCard.vue";
import ScoreBoard from "@/components/core/ScoreBoard.vue";
import { TIME_OUT } from "@/constants/constants";
import { generateNewPhrase } from "@/utils/generator";
import { defineComponent } from "vue";

declare interface PhrasesComponentData {
  wordList: string[];
  english: string;
  german: string;
  score: number;
  correct: boolean;
  wrong: boolean;
  gameOver: boolean;
  total: number;
  value: string;
  disabled: boolean;
}

export default defineComponent({
  components: { HorizontalCard, ScoreBoard },
  data(): PhrasesComponentData {
    return {
      wordList: [],
      value: "",
      gameOver: false,
      english: "string",
      german: "string",
      score: 0,
      correct: false,
      wrong: false,
      total: PHRASES.length,
      disabled: false,
    };
  },
  methods: {
    getNewPhrase(): void {
      if (this.wordList.length === Object.keys(PHRASES).length) {
        this.gameOver = true;
        return;
      }
      let { english, german } = generateNewPhrase();
      if (this.wordList.includes(english)) {
        this.getNewPhrase();
      } else {
        this.wordList.push(english);
        this.english = english;
        this.german = german;
      }
    },
    onChange(value: string): void {
      this.value = value;
    },
    onSubmit(): void {
      if (this.value) {
        this.disabled = true;
        if (
          this.value.toLowerCase().trim() === this.german.toLowerCase().trim()
        ) {
          this.score++;
          this.correct = true;
        } else {
          this.wrong = true;
        }
        setTimeout(() => {
          this.correct = false;
          this.wrong = false;
          this.disabled = false;
          this.value = "";
          this.getNewPhrase();
        }, TIME_OUT);
      }
    },
  },
  mounted(): void {
    this.getNewPhrase();
  },
  name: "Phrases",
});
</script>
<style lang="scss">
.container {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
}
</style>
