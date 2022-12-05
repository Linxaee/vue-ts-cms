import { ITableConfig } from "@/base-ui/table";
export const contentTableConfig: ITableConfig = {
    title: "用户列表",
    propList: [
        { prop: "name", label: "用户名", minWidth: "100" },
        { prop: "realname", label: "真实姓名", minWidth: "100" },
        { prop: "cellphone", label: "手机号码", minWidth: "120" },
        { prop: "enable", label: "状态", minWidth: "100" },
        {
            prop: "createAt",
            label: "创建时间",
            minWidth: "190"
        },
        {
            prop: "updateAt",
            label: "更新时间",
            minWidth: "190"
        },
        {
            label: "操作",
            minWidth: "100",
            slotName: "handler"
        }
    ],
    showIndexColumn: true,
    showSelectColumn: true
};
