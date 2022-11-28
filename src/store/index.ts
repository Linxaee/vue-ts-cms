import { createStore } from "vuex";
import { IRootState } from "./types";
import login from "./login/login";
const store = createStore<IRootState>({
    state: () => {
        return {
            name: "Linxae",
            age: 18
        };
    },
    modules: { login }
});

export default store;
