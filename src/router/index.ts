import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import HomePage from "../views/HomePage.vue";
import PondPage from "../views/PondPage.vue";
import PageSecond from "../views/Page2.vue";
import RegisterPage from "../views/RegisterPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/tabs/tab1",
    },
    {
        path: "/tabs/",
        component: TabsPage,
        children: [
            {
                path: "",
                redirect: "/tabs/tab1",
            },
            {
                path: "tab1",
                component: () => import("@/views/HomePage.vue"),
            },
            {
                path: "tab2",
                component: () => import("@/views/PondPage.vue"),
            },
        ],
    },
    {
        path: "/home",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/page2",
        component: PageSecond,
    },
    {
        path: "/register",
        component: RegisterPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
