export interface ITableConfig {
    title: string;
    propList: IPropListItem[];
    showIndexColumn: boolean;
    showSelectColumn: boolean;
}
export interface IPropListItem {
    prop?: string;
    label: string;
    minWidth?: string;
    slotName?: string;
}
export interface IPageInfo {
    currentPage: number;
    pageSize: number;
}
