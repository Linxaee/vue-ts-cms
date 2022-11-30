export const transformIcon = (icon: string) => {
    return icon
        .split("-")
        .slice(2)
        .map((value) => value.slice(0, 1).toUpperCase() + value.slice(1))
        .join("");
};
