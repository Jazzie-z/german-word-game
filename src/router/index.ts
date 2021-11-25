import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";

export const Pages = [
  // {name: 'Home',path:'/',component: Home},
  { name: "Article", path: "/article", component: Article },
  { name: "Phrases", path: "/phrases", component: Article },
  { name: "Cases", path: "/cases", component: Article },
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
