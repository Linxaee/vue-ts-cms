import { createRouter, createWebHistory } from "vue-router";
// 导入路由类型
import type { RouteRecordRaw } from "vue-router";
import LocalCache from "@/utils/cache";

const routes: RouteRecordRaw[] = [
    // { path: "/", redirect: "/login" },
    {
        path: "/",
        redirect: "/main"
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
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        component: () => import("@/views/not-found/not-found.vue")
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

router.beforeEach((to) => {
    if (to.path != "/login" && !LocalCache.getCache("token")) return "/login";
    if (to.path == "/login" && LocalCache.getCache("token")) return "/main";
});

export default router;
