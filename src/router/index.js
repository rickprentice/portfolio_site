import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import VendingMachine from "@/views/VendingMachine.vue";
import TEnmo from "@/views/TEnmo.vue";
import MedScheduling from "@/views/MedScheduling.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/vendingMachine",
    name: "vending_machine",
    component: VendingMachine,
  },
  {
    path: "/tenmo",
    name: "tenmo",
    component: TEnmo,
  },
  {
    path: "/medScheduling",
    name: "med_scheduling",
    component: MedScheduling,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;