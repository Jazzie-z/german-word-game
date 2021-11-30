<template lang="">
  <div
    class="wrapper"
    v-bind:style="{
      'justify-content': justify,
      'flex-direction': direction,
    }"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    justify: { type: String, required: false },
    direction: { type: String, required: false, default: "row" },
  },
  computed: {
    style() {
      return {
        "justify-content": this.justify,
        "flex-direction": this.direction,
      };
    },
  },
});
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  max-width: 80vw;
  margin: 25px 0;
  overflow: scroll;
  @media only screen and (max-width: 600px) {
    max-width: 90vw;
    margin: 15px 0;
  }
}
</style>
