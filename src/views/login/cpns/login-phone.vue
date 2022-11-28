<template>
    <el-form label-width="70px" ref="elFormRef" :rules="rules" :model="phone">
        <el-form-item label="手机号" prop="num">
            <el-input v-model="phone.num" />
        </el-form-item>
        <el-form-item label="验证码" prop="code">
            <div class="get-code">
                <el-input v-model="phone.code" />
                <el-button type="primary" class="get-btn">获取验证码</el-button>
            </div>
        </el-form-item>
    </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, defineExpose } from "vue";
import { rules } from "../config/phone-config";
import { ElForm } from "element-plus";
import { useStore } from "vuex";
const store = useStore();

const phone = reactive({
    num: "",
    code: ""
});

const elFormRef = ref<InstanceType<typeof ElForm>>();

const loginAction = () => {
    elFormRef.value?.validate((valid) => {
        if (valid) {
            store.dispatch("login/phoneLoginAction", { ...phone });
        }
    });
};
defineExpose({ loginAction });
</script>

<style scoped>
.get-code {
    display: flex;
}

.get-btn {
    margin-left: 8px;
}
</style>
