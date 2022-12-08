import { IDataType } from "@/service/requests/types";
import myRequest from "@/service";

export const getPageListData = (url: string, queryInfo: any) =>
    myRequest.post<IDataType>(url, {
        data: queryInfo
    });

// url: /users/id
export function deletePageData(url: string) {
    return myRequest.delete<IDataType>(url);
}

export function createPageData(url: string, newData: any) {
    return myRequest.post<IDataType>(url, {
        data: newData
    });
}

export function editPageData(url: string, editData: any) {
    return myRequest.patch<IDataType>(url, {
        data: editData
    });
}
