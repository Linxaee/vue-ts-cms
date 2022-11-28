// 编写好规则
export const rules = {
    num: [
        {
            required: true,
            message: "手机号是必传内容~",
            trigger: "blur"
        },
        {
            pattern: /^[0-9]{5,10}$/,
            message: "请正确填入手机号",
            trigger: "blur"
        }
    ],
    code: [
        {
            required: true,
            message: "验证码是必传内容~",
            trigger: "blur"
        }
    ]
};
