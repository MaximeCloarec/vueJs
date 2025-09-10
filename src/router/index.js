import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../pages/Home.vue"),
        },
        {
            path: "/about",
            name: "about",
            component: () => import("../pages/About.vue"),
        },
        {
            path: "/binding",
            name: "bind",
            component: () => import("../pages/exercice/event-binding.vue"),
        },
        {
            path: "/button",
            name: "button",
            component: () => import("../pages/exercice/directive-v-on.vue"),
        },
        {
            path: "/trucs",
            name: "truc",
            component: () => import("../pages/tp/tp-truc.vue"),
        },
        {
            path: "/button2",
            name: "btn",
            component: () => import("../pages/tp/button.vue"),
        },
    ],
});

export default router;
