<template>
  <div class="title">Choose A Game</div>
  <list :direction="direction">
    <mini-card
      v-for="page in pageList"
      :key="page.name"
      :value="page.name"
      @on-click="onClick(page.path)"
    >
    </mini-card>
  </list>
</template>

<script lang="ts">
import List from "@/components/collection/List.vue";
import MiniCard from "@/components/core/MiniCard.vue";
import { Pages } from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MiniCard, List },
  name: "Home",
  data() {
    return {
      pageList: Pages,
      direction: "row",
    };
  },
  methods: {
    onClick(path: string) {
      this.$router.push(path);
    },
    myEventHandler(event: UIEvent | null) {
      const w = (event?.target as Window) || window;
      if (w.innerWidth < 600) {
        this.direction = "column";
      } else {
        this.direction = "row";
      }
    },
  },
  created() {
    this.myEventHandler(null);
    window.addEventListener("resize", this.myEventHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
  },
});
</script>
<style lang="scss" scoped>
.title {
  font-size: 3em;
  margin: 10px;
}
</style>
