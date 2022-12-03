import { Module } from "vuex";
import { IRootState } from "@/store/types";
import { IGetPagePayload, ISystemState } from "./types";
import { getPageListData } from "@/service/main/system/system";
import { IUserInfo } from "@/service/login/types";

const systemModule: Module<ISystemState, IRootState> = {
    namespaced: true,
    state() {
        return {
            usersList: [],
            usersCount: 0,
            roleList: [],
            roleCount: 0
        };
    },
    getters: {
        pageListData(state) {
            return (pageName: string) => {
                return (state as any)[`${pageName}List`];
            };
        }
    },
    mutations: {
        changeUsersList(state, userList: IUserInfo[]) {
            state.usersList = userList;
        },
        changeUsersCount(state, userCount: number) {
            state.usersCount = userCount;
        },
        changeRoleList(state, list: any[]) {
            state.roleList = list;
        },
        changeRoleCount(state, count: number) {
            state.roleCount = count;
        }
    },
    actions: {
        async getPageListAction({ commit }, payload: IGetPagePayload) {
            // 1.获取pageUrl
            const pageName = payload.pageName;
            const pageUrl = `/${pageName}/list`;

            // 2.对页面发起请求
            const pageResult = await getPageListData(pageUrl, payload.queryInfo);

            const { list, totalCount } = pageResult.data;

            const changePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1);

            commit(`change${changePageName}List`, list);
            commit(`change${changePageName}Count`, totalCount);
        }
    }
};

export default systemModule;
