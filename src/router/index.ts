import { createRouter, createWebHistory } from "vue-router";
// 导入路由类型
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    // { path: "/", redirect: "/login" },
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/login.vue")
    },
    {
        path: "/main",
        name: "main",
        component: () => import("@/views/main/main.vue")
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});
export default router;
