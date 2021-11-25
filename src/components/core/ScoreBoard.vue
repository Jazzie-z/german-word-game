<template>
  <div class="board">{{ score }} / {{ total }}</div>
</template>
<script>
export default {
  props: {
    score: Number,
    total: Number,
  },
};
</script>
<style lang="scss" scoped>
.board {
  background: var(--card-color1);
  padding: 10px 20px;
  width: fit-content;
  border-radius: var(--card-border);
  color: var(--primary-color);
  @media only screen and (max-width: 600px) {
    font-size: 3em;
  }
}
</style>
