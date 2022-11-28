<template>
    <div class="login-account">
        <el-form label-width="60px" :rules="rules" ref="elFormRef" :model="account">
            <el-form-item label="账号" prop="name">
                <el-input v-model="account.name" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="account.password" show-password />
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, defineExpose, ref } from "vue";
import { ElForm } from "element-plus";
import { rules } from "../config/account-config";
import localCache from "@/utils/cache";
const account = reactive({
    name: localCache.getCache("name") ?? "",
    password: localCache.getCache("password") ?? ""
});
// 获取elForm对象
const elFormRef = ref<InstanceType<typeof ElForm>>();
// 在login-panel中调用，可以穿入参数
const loginAction = (isKeepPassword: boolean) => {
    elFormRef.value?.validate((valid) => {
        if (valid) {
            if (isKeepPassword) {
                // 本地缓存
                localCache.setCache("name", account.name);
                localCache.setCache("password", account.password);
            } else {
                // 若不需记住密码则清空
                localCache.deleteCache("name");
                localCache.deleteCache("password");
            }
        }
    });
};

defineExpose({ loginAction });
</script>

<style scoped></style>
