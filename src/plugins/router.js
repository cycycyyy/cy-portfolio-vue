import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    name: "Home",
    meta: { title: "cy. | Home" },
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/About",
    name: "About",
    meta: { title: "cy. | About" },
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/Projects",
    name: "Projects",
    meta: { title: "cy. | Projects" },
    component: () => import("@/views/Projects.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.meta.title;
  next();
});

export default router;
