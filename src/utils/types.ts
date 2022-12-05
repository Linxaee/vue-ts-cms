export type LinOptional<T> = {
    [P in keyof T]?: T[P];
};

export type TypeFromObj<T> = {
    [P in keyof T]: T[P];
};

