<template>
    <div class="user">
        <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
        <PageContent :contentTableConfig="contentTableConfig" pageName="users"></PageContent>
    </div>
</template>

<script lang="ts" setup>
import { contentTableConfig } from "@/views/main/system/user/config/content.config";
import { searchFormConfig } from "@/views/main/system/user/config/search.config";
import PageSearch from "@/components/page-search";
import PageContent from "@/components/page-content";
</script>

<style scoped>
</style>
