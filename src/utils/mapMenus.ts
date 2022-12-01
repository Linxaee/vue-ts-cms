import { RouteRecordRaw } from "vue-router";
import { ITopMenuInfo, ISubMenuInfo } from "@/service/login/type";
let firstMenu: ISubMenuInfo | undefined = undefined;
export function mapMenusToRoutes(userMenus: ITopMenuInfo[]): RouteRecordRaw[] {
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
    const _recurseGetRoute = (menus: ITopMenuInfo[] | ISubMenuInfo[] | undefined) => {
        for (const menu of menus!) {
            if (menu.type === 2) {
                const route = allRoutes.find((route) => route.path === menu.url);
                if (route) routes.push(route);
                if (!firstMenu) firstMenu = menu as ISubMenuInfo;
            } else {
                _recurseGetRoute(menu.children);
            }
        }
    };
    _recurseGetRoute(userMenus);
    return routes;
}

export function pathMapToMenu(userMenu: ITopMenuInfo[], curPath: string): ITopMenuInfo | undefined {
    if (!userMenu) return;
    for (const menu of userMenu) {
        if (menu.type === 1) {
            const res = pathMapToMenu(menu.children!, curPath);
            if (res) return res;
        } else if (menu.type === 2 && menu.url === curPath) {
            return menu;
        }
    }
}

export { firstMenu };
