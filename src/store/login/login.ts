import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";
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
            userInfo: {}
        };
    },
    getters: {},
    mutations: {},
    actions: {
        accountLoginAction({ commit }, payload: any) {
            console.log("执行accountLoginAction", payload);
        },
        phoneLoginAction({ commit }, payload: any) {
            console.log("执行phoneLoginAction", payload);
        }
    }
};

export default loginModule;
