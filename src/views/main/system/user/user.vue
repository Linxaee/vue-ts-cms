<template>
    <div class="user">
        <PageSearch
            :searchFormConfig="searchFormConfig"
            @queryBtnClick="handleQueryClick"
            @resetBtnClick="handleResetClick"
        ></PageSearch>
        <PageContent
            :contentTableConfig="contentTableConfig"
            pageName="users"
            ref="pageContentRef"
            @newBtnClick="handleNewData"
            @editBtnClick="handleEditData"
        ></PageContent>
        <page-modal
            :defaultInfo="defaultInfo"
            ref="pageModalRef"
            pageName="users"
            :modalConfig="modalConfigRef"
        ></page-modal>
    </div>
</template>

<script lang="ts" setup>
import { contentTableConfig } from "@/views/main/system/user/config/content.config";
import { searchFormConfig } from "@/views/main/system/user/config/search.config";
import { modalConfig } from "./config/modal.config";

import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
import PageModal from "@/components/page-modal";

import { usePageSearch } from "@/hooks/usePageSearch";
import { usePageModal } from "@/hooks/use-page-modal";
import { useStore } from "@/store";
import { computed } from "vue";

// pageModal相关的hook逻辑
// 1.处理密码的逻辑
const newCallback = () => {
    const passwordItem = modalConfig.formItems.find((item) => item.field === "password");
    passwordItem!.isHidden = false;
};
const editCallback = () => {
    const passwordItem = modalConfig.formItems.find((item) => item.field === "password");
    passwordItem!.isHidden = true;
};

// 2.动态添加部门和角色列表
const store = useStore();
const modalConfigRef = computed(() => {
    const departmentItem = modalConfig.formItems.find((item) => item.field === "departmentId");
    departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id };
    });
    const roleItem = modalConfig.formItems.find((item) => item.field === "roleId");
    roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id };
    });
    return modalConfig;
});

// 3.调用hook获取公共变量和函数
const { pageModalRef, defaultInfo, handleNewData, handleEditData } = usePageModal(
    newCallback,
    editCallback
);
const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch();
</script>

<style scoped></style>
