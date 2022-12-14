import { RouteRecordRaw } from "vue-router";
import { ITopMenuInfo, ISubMenuInfo } from "@/service/login/types";
import { IBreadcrumb } from "@/base-ui/breadcrumb";
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

/**
 * 给出当前路径，获取当前路径对应的菜单对象
 * @param userMenu 全部的菜单对象
 * @param curPath 当前的路径
 * @param breadcrumbs 面包屑数组
 * @returns 匹配到的菜单对象
 */
export function pathMapToMenu(
    userMenu: ITopMenuInfo[],
    curPath: string,
    breadcrumbs?: IBreadcrumb[]
): ITopMenuInfo | undefined {
    if (!userMenu) return;
    for (const menu of userMenu) {
        if (menu.type === 1) {
            const findMenu = pathMapToMenu(menu.children ?? [], curPath);
            if (findMenu) {
                breadcrumbs?.push({ name: menu.name });
                breadcrumbs?.push({ name: findMenu.name });
                return findMenu;
            }
        } else if (menu.type === 2 && menu.url === curPath) {
            return menu;
        }
    }
}

/**
 *
 * @param userMenus 全部的菜单对象
 * @param curPath 当前的路径
 * @returns 面包屑数组
 */
export function pathMapBreadcrumbs(userMenus: any[], curPath: string) {
    const breadcrumbs: IBreadcrumb[] = [];
    pathMapToMenu(userMenus, curPath, breadcrumbs);
    return breadcrumbs;
}

export function mapMenusToPermissions(userMenus: any[]) {
    const permissions: string[] = [];

    const _recurseGetPermission = (menus: any[]) => {
        for (const menu of menus) {
            if (menu.type === 1 || menu.type === 2) {
                _recurseGetPermission(menu.children ?? []);
            } else if (menu.type === 3) {
                permissions.push(menu.permission);
            }
        }
    };
    _recurseGetPermission(userMenus);

    return permissions;
}

export { firstMenu };
