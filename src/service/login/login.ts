import myRequest from "../index";

import { IAccount, ILoginResult, IUserInfo } from "./types";
import { IDataType } from "../requests/types";

enum LoginAPI {
    AccountLogin = "/login",
    LoginUserInfo = "/users/", // 用法: /users/1
    UserMenus = "/role/" // 用法: role/1/menu
}

export const accountLoginRequest = (account: IAccount) =>
    myRequest.post<IDataType<ILoginResult>>(LoginAPI.AccountLogin, { data: account });

export const requestUserInfoById = (id: number) =>
    myRequest.get<IDataType<IUserInfo>>(LoginAPI.LoginUserInfo + id);

export const requestUserMenuById = (id: number) =>
    myRequest.get<IDataType>(LoginAPI.UserMenus + id + "/menu");
