export interface IDataType<T = any> {
    code: number;
    data: T;
}
export interface IAccount {
    name: string;
    password: string;
}

export interface ILoginResult {
    id: number;
    name: string;
    token: string;
}

export interface Role {
    id: number;
    name: string;
    intro: string;
    createAt: Date;
    updateAt: Date;
}

export interface Department {
    id: number;
    name: string;
    parentId?: any;
    createAt: Date;
    updateAt: Date;
    leader: string;
}

export interface IUserInfo {
    id: number;
    name: string;
    realname: string;
    cellphone: number;
    enable: number;
    createAt: Date;
    updateAt: Date;
    role: Role;
    department: Department;
}

export interface IMenuInfo {
    id: number;
    url: string;
    name: string;
    sort: number;
    type: number;
    children?: IMenuInfo[];
    parentId: number;
}
export interface ITopMenuInfo {
    id: number;
    name: string;
    sort: number;
    type: number;
    url: string;
    icon?: string;
    children?: IMenuInfo[];
}
