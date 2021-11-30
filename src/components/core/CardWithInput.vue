<template lang="">
  <div class="card" v-bind:class="{ correct, wrong }">
    <div class="input_container" v-if="withInput">
      <input
        v-if="!wrong"
        v-model="inputValue"
        @change="onChange"
        :disabled="disabled"
      />
      <div v-if="wrong">
        {{ answer }}
      </div>
    </div>
    <div v-if="value">{{ value }}</div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardWithInput",
  props: {
    withInput: Boolean,
    value: String,
    correct: Boolean,
    wrong: Boolean,
    disabled: Boolean,
    answer: String,
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
  },
  emits: ["on-change"],
});
</script>
<style lang="scss" scoped>
.card {
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin: 10px;
  cursor: pointer;
  padding: 10px;
  background: var(--primary-color);
  border-radius: var(--card-border);
  min-width: 100px;
  white-space: nowrap;
  @media only screen and (max-width: 600px) {
    font-size: 2em;
  }
  .input_container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input_container {
    input,
    div {
      outline: none;
      border: none;
      height: 30px;
      width: 90%;
      font-size: 24px;
      border-radius: var(--card-border);
      min-width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media only screen and (max-width: 600px) {
        width: 80%;
        min-width: 0;
        font-size: 1em;
      }
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
