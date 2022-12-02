import { ILoginState } from "./login/types";
import { ISystemState } from "./main/system/types";
export interface IRootState {
    name: string;
    age: number;
}

export interface IRootAndModule {
    login: ILoginState;
}

export interface IRootAndModule {
    login: ILoginState;
    system: ISystemState;
}

export type IStoreType = IRootState & IRootAndModule;
