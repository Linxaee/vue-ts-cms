import { IDataType } from "@/service/requests/types";
import myRequest from "@/service";

export const getPageListData = (url: string, queryInfo: any) =>
    myRequest.post<IDataType>(url, {
        data: queryInfo
    });
