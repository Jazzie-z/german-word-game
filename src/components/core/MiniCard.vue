<template>
  <div class="card" v-bind:class="{ active }" v-on:click="onClick(value)">
    {{ value }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    value: String,
    active: Boolean,
  },
  emits: ["on-click"],
  methods: {
    onClick(value: string): void {
      this.$emit("on-click", value);
    },
  },
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
  border-radius: var(--card-border);
  cursor: pointer;
  padding: 10px;
  background: white;
  color: var(--primary-color);
  // border: 3px solid var(--primary-color);
  white-space: nowrap;
  &:hover {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 600px) {
    margin: 5px;
  }
}
.active {
  background: var(--tertiary-color);
  color: white;
  border: none;
}
</style>
