<template>
    <div class="role">
        <page-search
            :searchFormConfig="searchFormConfig"
            @queryBtnClick="handleQueryClick"
            @resetBtnClick="handleResetClick"
        ></page-search>
        <page-content
            :contentTableConfig="contentTableConfig"
            pageName="role"
            ref="pageContentRef"
        ></page-content>
    </div>
</template>

<script lang="ts" setup>
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";

import { searchFormConfig } from "./config/search.config";
import { contentTableConfig } from "./config/content.config";

import { usePageSearch } from "@/hooks/usePageSearch";

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch();
</script>

<style scoped></style>
