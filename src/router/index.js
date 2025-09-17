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
        {
            path: "/style",
            name:"style",
            component: () => import("../pages/exercice/StyleDynamic.vue")
        },
        {
            path:"/eval",
            name:"evallluuu",
            component: () => import("../pages/tp/eval.vue")
        },
        {
            path:"/if",
            name:"if",
            component: () => import("../pages/exercice/if.vue")
        },
        {
            path:"/life",
            name:"life",
            component: () => import("../pages/lesson/lifecycle.vue")

        },
        {
            path:"/fetch",
            name:"fetch",
            component: () => import("../pages/exercice/fetch.vue")
        },
        {
            path:"/parent",
            name:"parent",
            component: () => import("../pages/exercice/parent.vue")
        },
        {
            path:"/list",
            name:"list",
            component: () => import("../pages/exercice/friendList.vue")
        },
        {
            path:"/chart",
            name:"chart",
            component: () => import("../pages/exercice/chartjs.vue")
        },
        {
            path:"/pinia",
            name:"pinia",
            component: () => import("../pages/lesson/pinia.vue")
        }
    ],
});

export default router;
