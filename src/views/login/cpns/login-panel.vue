<template>
    <div class="login-panel">
        <h1 class="title">后台管理系统</h1>
        <el-tabs type="border-card" stretch v-model="curTab">
            <el-tab-pane name="account">
                <template #label>
                    <span
                        ><el-icon><User /></el-icon> 账号登录</span
                    >
                </template>
                <login-account ref="accountRef" />
            </el-tab-pane>
            <el-tab-pane name="phone">
                <template #label>
                    <span
                        ><el-icon><Cellphone /></el-icon> 手机登录</span
                    >
                </template>
                <login-phone ref="phoneRef" />
            </el-tab-pane>
        </el-tabs>

        <div class="account-control">
            <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
        </div>

        <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";

const isKeepPassword = ref(true);
const accountRef = ref<InstanceType<typeof LoginAccount>>();
const phoneRef = ref<InstanceType<typeof LoginPhone>>();
const curTab = ref("account");

const handleLoginClick = () => {
    // 判断tab在哪
    if (curTab.value === "account") accountRef.value?.loginAction(isKeepPassword.value);
    else phoneRef.value?.loginAction();
};
</script>

<style scoped lang="less">
.login-panel {
    margin-bottom: 150px;
    width: 320px;

    .title {
        text-align: center;
    }

    .account-control {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }

    .login-btn {
        width: 100%;
        margin-top: 10px;
    }
}
</style>
