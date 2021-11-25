<template lang="">
  <div class="wrapper">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  max-width: 80vw;
  margin: 25px 0;
  overflow: scroll;
  width: fit-content;
  @media only screen and (max-width: 600px) {
    max-width: 90vw;
    margin: 15px 0;
  }
}
</style>
