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
export interface IForm {
    formItems: IFormItem[];
    labelWidth?: string;
    colLayout: any;
    itemLayout: any;
}
