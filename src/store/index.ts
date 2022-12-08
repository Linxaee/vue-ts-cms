import { createStore, Store, useStore as useVuexStore } from "vuex";
import { IRootState, IStoreType } from "./types";
import login from "./login/login";
import system from "./main/system/system";
const store = createStore<IRootState>({
    state: () => {
        return {
            name: "Linxae",
            age: 18,
            entireDepartment: [],
            entireRole: []
        };
    },
    mutations: {
        changeEntireDepartment(state, list) {
            state.entireDepartment = list;
        },
        changeEntireRole(state, list) {
            state.entireRole = list;
        }
    },
    modules: { login, system }
});

export function setupStore() {
    store.dispatch("login/loadLocalLogin");
}
export function useStore(): Store<IStoreType> {
    return useVuexStore();
}
export default store;
