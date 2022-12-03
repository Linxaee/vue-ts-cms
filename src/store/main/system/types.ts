import { IUserInfo } from "@/service/login/types";
export interface ISystemState {
    usersList: IUserInfo[];
    usersCount: number;
    roleList: any[];
    roleCount: number;
}
export interface IQueryInfo {
    offset: number;
    size: number;
}
export interface IGetPagePayload {
    type: string;
    pageName: string;
    queryInfo?: IQueryInfo;
}
