<template>
  <div class="number_container">
    {{ number }}
  </div>
</template>
<script lang="ts">
export default {
  props: {
    number: Number,
  },
};
</script>
<style lang="scss">
.number_container {
  background: var(--primary-color);
  font-size: 0.7em;
  font-weight: 400;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  left: 5%;
  @media only screen and (max-width: 600px) {
    font-size: 1.2em;
    width: 30px;
    height: 30px;
  }
}
</style>
