import { IUserInfo, ITopMenuInfo } from "@/service/login/types";
export interface ILoginState {
    token: string;
    userInfo?: IUserInfo;
    userMenus: ITopMenuInfo[];
}
