import { IUserInfo } from "@/service/login/types";
export interface ISystemState {
    userList: IUserInfo[];
    userCount: number;
}
export interface IQueryInfo {
    offset: number;
    size: number;
}
export interface IGetPagePayload {
    type: string;
    pageUrl: string;
    queryInfo?: IQueryInfo;
}
