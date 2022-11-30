import { IUserInfo, ITopMenuInfo } from "@/service/login/type";
export interface ILoginState {
    token: string;
    userInfo?: IUserInfo;
    userMenus: ITopMenuInfo[];
}
