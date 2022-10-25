import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PrintView from "../views/PrintView.vue";
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: HomeView
    },
    {
      path: "/about",
      name: "About",
      component: AboutView
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashboardView
    },
    {
      path: "/print",
      name: "Print Set",
      component: PrintView
    },
  ],
});
router.beforeEach((to, from, next) => {
  document.title = "QPC -" + " " + to.name;
  next();
})

export default router;
