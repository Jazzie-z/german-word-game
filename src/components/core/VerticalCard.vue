<template>
  <div v-if="title">{{ title }}</div>
  <div class="card" :class="{ correct, wrong }" v-on:click="onClick(value)">
    {{ value }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    value: String,
    correct: Boolean,
    wrong: Boolean,
    title: String,
    disabled: Boolean,
  },
  emits: ["on-click"],
  methods: {
    onClick(value: string): void {
      if (!this.disabled) {
        this.$emit("on-click", value);
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.card {
  background: var(--primary-color);
  font-size: 3em;
  height: 30vh;
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  margin: 10px 20px;
  border-radius: var(--card-border);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 600px) {
    margin: 5px;
    width: 24vw;
    height: 24vh;
  }
}
.correct {
  background: var(--green);
}
.wrong {
  background: var(--red);
}
</style>
