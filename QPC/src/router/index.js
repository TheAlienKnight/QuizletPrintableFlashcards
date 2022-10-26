// note to self: document what these pages do
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PrintView from "../views/PrintView.vue";
import DashboardView from "../views/DashboardView.vue";
import NewSet from "../views/NewSet.vue";
import ImportSet from "../views/ImportSet.vue";

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
    // Technically, these two below could be lazy loaded but in reality I didn't
    // see any real load time issues with it so I am electing to ignore it
    {
      path: "/create",
      name: "Create New Set",
      component: NewSet
    },
    {
      path: "/import",
      name: "Import Set",
      component: ImportSet
    },
  ],
});
router.beforeEach((to, from, next) => {
  document.title = "QPC -" + " " + to.name;
  next();
})

export default router;
