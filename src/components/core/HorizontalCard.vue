<template>
  <div class="card">
    <div v-if="gameOver">GAME OVER !!!</div>
    <template v-else>
      <div v-if="value">{{ value }}</div>
      <div v-if="description">{{ description }}</div>
      <input v-if="withInput" />
      <number v-if="number" :number="number" />
    </template>
  </div>
</template>
<script>
import Number from "./Number.vue";
export default {
  components: { Number },
  props: {
    value: String,
    description: String,
    withInput: Boolean,
    number: Number,
    gameOver: Boolean,
  },
};
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
  }
}
</style>
