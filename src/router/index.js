import MainView from "@/views/MainView.vue";
import VisitorsView from "@/views/VisitorsView.vue";
import FoodView from "@/views/FoodView.vue";
import ResultsView from "@/views/ResultsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: MainView },
    { path: "/visitors", component: VisitorsView },
    { path: "/food", component: FoodView },
    { path: "/results", component: ResultsView },
  ],
});

export default router;
