import { createRouter, createWebHistory } from "vue-router";
import Tasks from "@/views/Tasks";
import New from "@/views/New";
import Task from "@/views/Task";
import NotFound from "@/views/NotFound";
const routes = [
  { path: "/", component: Tasks },
  { path: "/new", component: New },
  { path: "/task/:taskId", component: Task },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: "active",
  linkExactActiveClass: "active"
});

export default router;
