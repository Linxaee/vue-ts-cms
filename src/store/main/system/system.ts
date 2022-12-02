import { Module } from "vuex";
import { IRootState } from "@/store/types";
import { IGetPagePayload, ISystemState } from "./types";
import { getPageListData } from "@/service/main/system/system";
import { IUserInfo } from "@/service/login/types";

const systemModule: Module<ISystemState, IRootState> = {
    namespaced: true,
    state() {
        return {
            userList: [],
            userCount: 0
        };
    },
    getters: {},
    mutations: {
        changeUserList(state, userList: IUserInfo[]) {
            state.userList = userList;
        },
        changeUserCount(state, userCount: number) {
            state.userCount = userCount;
        }
    },
    actions: {
        async getPageListAction({ commit }, payload: IGetPagePayload) {
            // 1.对页面发起请求
            const pageResult = await getPageListData(payload.pageUrl, payload.queryInfo);
            const { list, totalCount } = pageResult.data;
            commit("changeUserList", list);
            commit("changeUserCount", totalCount);
        }
    }
};

export default systemModule;
