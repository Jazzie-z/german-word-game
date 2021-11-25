<template>
  <back-button v-if="!isHome" />
  <div class="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BackButton from "./components/core/BackButton.vue";
export default defineComponent({
  components: { BackButton },
  computed: {
    isHome(): boolean {
      return this.$route.path === "/";
    },
  },
});
</script>
<style lang="scss">
@import "assets/styles/variables.scss";
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
