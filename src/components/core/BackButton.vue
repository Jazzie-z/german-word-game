<template lang="">
  <div class="button" v-on:click="onClick">&#8592; Back</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    onClick(): void {
      this.$router.go(-1);
      console.log(this);
    },
  },
});
</script>
<style lang="scss">
.button {
  color: white;
  width: fit-content;
  padding: 3px 12px;
  border-radius: 25px;
  font-weight: normal;
  background: var(--black);
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    font-size: 2em;
    margin-top: 15px;
  }
}
</style>
