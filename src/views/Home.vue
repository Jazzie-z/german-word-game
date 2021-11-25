<template>
  <div class="title">Choose A Game</div>
  <horizontal-list>
    <mini-card
      v-for="page in pageList"
      :key="page.name"
      :value="page.name"
      @on-click="onClick(page.path)"
    >
    </mini-card>
  </horizontal-list>
</template>

<script lang="ts">
import HorizontalList from "@/components/collection/HorizontalList.vue";
import MiniCard from "@/components/core/MiniCard.vue";
import { Pages } from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MiniCard, HorizontalList },
  name: "Home",

  data() {
    return {
      pageList: Pages,
    };
  },
  methods: {
    onClick(path: string) {
      this.$router.push(path);
    },
  },
});
</script>
<style lang="scss" scoped>
.title {
  font-size: 3em;
  margin: 10px;
}
</style>
