<template>
    <div class="user">
        <div>
            <lin-form :formItems="formItems" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import LinForm, { IFormItem } from "@/base-ui/form";
const formItems: IFormItem[] = [
    {
        type: "input",
        label: "用户名",
        rules: [],
        placeholder: "请输入用户名"
    },
    {
        type: "password",
        label: "密码",
        rules: [],
        placeholder: "请输入密码"
    },
    {
        type: "select",
        label: "喜欢的运动",
        rules: [],
        placeholder: "请选择喜欢的运动",
        options: [
            { title: "篮球", value: "basketball" },
            { title: "足球", value: "football" }
        ]
    },
    {
        type: "datepicker",
        label: "创建时间",
        rules: [],
        otherOptions: {
            startPlaceholder: "开始时间",
            endPlaceholder: "结束时间",
            type: "daterange"
        }
    }
];
</script>

<style scoped></style>
