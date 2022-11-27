<template>
    <div class="login-account">
        <el-form label-width="60px" :rules="rules" ref="elFormRef" :model="account">
            <el-form-item label="账号" prop="name">
                <el-input v-model="account.name" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="account.password" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, defineExpose, ref } from "vue";
import { ElForm } from "element-plus";
import { rules } from "../config/account-config";

const account = reactive({
    name: "",
    password: ""
});
// 获取elForm对象
const elFormRef = ref<InstanceType<typeof ElForm>>();
const loginAction = () => {
    console.log(123);

    elFormRef.value?.validate((valid) => {
        console.log(valid);
    });
};

defineExpose({ loginAction });
</script>

<style scoped></style>
