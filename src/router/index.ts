import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Article from "@/views/Article.vue";
import Meanings from "@/views/Meanings.vue";
import Phrases from "@/views/Phrases.vue";

export const Pages = [
  { name: "Article", path: "/article", component: Article },
  { name: "Meanings", path: "/meanings", component: Meanings },
  { name: "Phrases", path: "/phrases", component: Phrases },
];
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  ...Pages,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
