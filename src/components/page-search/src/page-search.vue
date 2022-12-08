<template>
    <div class="page-search">
        <LinForm v-bind="searchFormConfig" v-model="formData">
            <template #title>
                <h1>高级检索</h1>
            </template>
            <template #footer>
                <el-button @click="handleResetClick">重置</el-button>
                <el-button type="primary" @click="handleQueryClick">搜索</el-button>
            </template>
        </LinForm>
    </div>
</template>

<script lang="ts" setup>
import LinForm, { IFormConfig } from "@/base-ui/form";
import { ref } from "vue";
import { TypeFromObj } from "@/utils/types";

const emit = defineEmits<{
    (e: "resetBtnClick"): void;
    (e: "queryBtnClick", formData: TypeFromObj<typeof formOriginData>): void;
}>();

const props = defineProps<{
    searchFormConfig: IFormConfig;
}>();

const formItems = props.searchFormConfig.formItems ?? [];
const formOriginData: any = {};
formItems.forEach((item) => {
    formOriginData[item.field] = "";
});

const formData = ref<TypeFromObj<typeof formOriginData>>(formOriginData);

// 2.优化二: 当用户点击重置
const handleResetClick = () => {
    for (const key in formOriginData) {
        formData.value[key] = "";
    }
    emit("resetBtnClick");
};

// 3.优化三: 当用户点击搜索
const handleQueryClick = () => {
    emit("queryBtnClick", formData.value);
};
</script>

<style lang="scss" scoped></style>
