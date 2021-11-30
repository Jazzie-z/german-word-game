<template>
  <div class="card" :class="{ correct, wrong }">
    <div v-if="gameOver">GAME OVER !!!</div>
    <template v-else>
      <input
        v-if="withInput"
        v-model="inputValue"
        :disabled="disabled"
        ref="textInput"
        autofocus
      />
      <div v-if="value">{{ value }}</div>
      <div v-if="description">{{ description }}</div>
      <number-component v-if="number" :number="number" />
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NumberComponent from "./Number.vue";
export default defineComponent({
  components: { NumberComponent },
  props: {
    value: String,
    description: String,
    withInput: Boolean,
    number: Number,
    gameOver: Boolean,
    disabled: Boolean,
    correct: Boolean,
    wrong: Boolean,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    inputValue(newValue) {
      this.$emit("on-change", newValue);
    },
    wrong() {
      this.clearInput();
    },
    correct() {
      this.clearInput();
    },
  },
  methods: {
    clearInput() {
      if (this.wrong === false && this.correct === false) {
        this.inputValue = "";
      }
    },
  },
  emits: ["on-change"],
});
</script>
<style lang="scss" scoped>
.card {
  position: relative;
  background: var(--secondary-color);
  font-size: 2em;
  height: 20vh;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 20px;
  border-radius: var(--card-border);
  color: var(--white);
  @media only screen and (max-width: 600px) {
    height: 15vh;
    font-size: 2.5em;
    width: 100%;
  }
  input {
    outline: none;
    border: none;
    height: 60px;
    width: 60%;
    font-size: 24px;
    border-radius: var(--card-border);
    min-width: 250px;
    @media only screen and (max-width: 600px) {
      font-size: 0.8em;
      height: 26px;
      width: 50%;
      min-width: 0;
    }
  }
}
.correct {
  background: var(--green);
}
.wrong {
  background: var(--red);
}
</style>
