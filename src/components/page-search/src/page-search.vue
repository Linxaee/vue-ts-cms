<template>
    <div class="page-search">
        <lin-form v-bind="searchFormConfig" v-model="formData">
            <template #title>
                <h1>高级检索</h1>
            </template>
            <template #footer>
                <el-button>重置</el-button>
                <el-button type="primary">搜索</el-button>
            </template>
        </lin-form>
    </div>
</template>

<script lang="ts" setup>
import LinForm, { IFormConfig } from "@/base-ui/form";
import { ref } from "vue";
const props = defineProps<{
    searchFormConfig: IFormConfig;
}>();
const formData = ref({
    createTime: "",
    id: "",
    name: "",
    password: "",
    sport: ""
});
</script>

<style lang="scss" scoped></style>
