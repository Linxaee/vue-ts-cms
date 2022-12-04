<template>
    <div class="page-search">
        <lin-form v-bind="searchFormConfig" v-model="formData">
            <template #title>
                <h1>高级检索</h1>
            </template>
            <template #footer>
                <el-button @click="handleResetClick">重置</el-button>
                <el-button type="primary" @click="handleQueryClick">搜索</el-button>
            </template>
        </lin-form>
    </div>
</template>

<script lang="ts" setup>
import LinForm, { IFormConfig } from "@/base-ui/form";
import { ref } from "vue";

const emit = defineEmits(["queryBtnClick"]);

const props = defineProps<{
    searchFormConfig: IFormConfig;
}>();

const formItems = props.searchFormConfig.formItems ?? [];
const formOriginData: any = {};
formItems.forEach((item) => {
    formOriginData[item.field] = "";
});

const formData = ref(formOriginData);

// 2.优化二: 当用户点击重置
const handleResetClick = () => {
    for (const key in formOriginData) {
        formData.value[key] = "";
    }
    emit("queryBtnClick");
};

// 3.优化三: 当用户点击搜索
const handleQueryClick = () => {
    emit("queryBtnClick", formData.value);
};
</script>

<style lang="scss" scoped></style>
