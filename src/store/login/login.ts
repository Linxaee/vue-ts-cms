import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
import { accountLoginRequest, requestUserInfoById, requestUserMenuById } from "@/service/login/login";
import { IAccount } from "@/service/login/type";
import LocalCache from "@/utils/cache";
import router from "@/router";

/**
 * Module<S,R>
 * @param {S} 本模块的类型
 * @param {R} 根模块类型
 */

const loginModule: Module<ILoginState, IRootState> = {
    namespaced: true,
    state() {
        return {
            token: "",
            userInfo: {},
            userMenus: []
        };
    },
    getters: {},
    mutations: {
        changeToken(state, token: string) {
            state.token = token;
        },
        changeUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        changeUserMenus(state, userMenus) {
            state.userMenus = userMenus;
        }
    },
    actions: {
        async accountLoginAction({ commit }, payload: IAccount) {
            // 实现登录逻辑
            const loginRes = await accountLoginRequest(payload);
            const { id, token } = loginRes.data;
            LocalCache.setCache("token", token);
            commit("changeToken", token);

            // 请求用户信息和侧边列表项
            const [userInfoRes, menuInfoRes] = await Promise.all([requestUserInfoById(id), requestUserMenuById(id)]);
            LocalCache.setCache("userInfo", userInfoRes.data);
            LocalCache.setCache("userMenus", menuInfoRes.data);
            commit("changeUserInfo", userInfoRes.data);
            commit("changeUserMenus", menuInfoRes.data);

            // 路由跳转
            router.push("/main");
        },
        phoneLoginAction({ commit }, payload: any) {
            // 不做
            console.log("执行phoneLoginAction", payload);
        },
        // 加载本地数据到vuex
        loadLocalLogin({ commit }) {
            const token = LocalCache.getCache("token");
            if (token) {
                commit("changeToken", token);
            }
            const userInfo = LocalCache.getCache("userInfo");
            if (userInfo) {
                commit("changeUserInfo", userInfo);
            }
            const userMenus = LocalCache.getCache("userMenus");
            if (userMenus) {
                commit("changeUserMenus", userMenus);
            }
        }
    }
};

export default loginModule;
