import { LinOptional } from "@/utils";
type IFormType = "input" | "password" | "select" | "datepicker";
export interface IFormItem {
    type: IFormType;
    label: string;
    rules?: any[];
    placeholder?: string;
    // 针对select
    options?: IOptions[];
    // 针对特殊的属性
    otherOptions?: any;
}

export interface IOptions {
    value: string | number;
    title: string;
}
export interface IColLayout {
    span: number;
    offset: number;
    push: number;
    pull: number;
    xs: number | object;
    sm: number | object;
    md: number | object;
    lg: number | object;
    xl: number | object;
    tag: string;
}
export interface IForm {
    formItems: IFormItem[];
    labelWidth?: string;
    colLayout?: LinOptional<IColLayout>;
    itemLayout?: any;
}
