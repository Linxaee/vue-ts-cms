import myRequest from "../index";

import { IAccount, IDataType, ILoginResult } from "./type";

enum LoginAPI {
    AccountLogin = "/login",
    LoginUserInfo = "/users/", // 用法: /users/1
    UserMenus = "/role/" // 用法: role/1/menu
}

export const accountLoginRequest = (account: IAccount) => myRequest.post("", {});
