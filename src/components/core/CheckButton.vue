<template>
  <button
    class="button"
    :disabled="disabled"
    v-bind:class="{ disabled }"
    v-on:click="onClick"
  >
    Check
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    disabled: Boolean,
  },
  emits: ["on-click"],
  methods: {
    onClick(evt: MouseEvent): void {
      evt.preventDefault();
      if (!this.disabled) {
        this.$emit("on-click");
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.button {
  padding: 10px 20px;
  background: var(--btn-color);
  border-radius: var(--card-border);
  outline: none;
  border: none;
}
.disabled {
  background: grey;
}
</style>
