import { RouteRecordRaw } from "vue-router";

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
    const routes: RouteRecordRaw[] = [];
    // 1.先加载所有的路由
    const allRoutes: RouteRecordRaw[] = [];
    const routeFiles = require.context("../router/main", true, /\.ts/);
    // 获取所以文件路径（key）
    routeFiles.keys().forEach((key) => {
        // 路径处理拼接
        const route = require("../router/main" + key.slice(1, key.length));
        allRoutes.push(route.default);
    });
    // 2.根据菜单获取需要的路由
    // 递归获取
    const _recurseGetRoute = (menus: any[]) => {
        for (const menu of menus) {
            if (menu.type === 2) {
                const route = allRoutes.find((route) => route.path === menu.url);
                if (route) routes.push(route);
            } else {
                _recurseGetRoute(menu.children);
            }
        }
    };
    _recurseGetRoute(userMenus);
    return routes;
}
