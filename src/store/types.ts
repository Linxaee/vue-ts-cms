import { ILoginState } from "./login/types";
export interface IRootState {
    name: string;
    age: number;
}

export interface IRootAndModule {
    login: ILoginState;
}

export type IStoreType = IRootState & IRootAndModule;
