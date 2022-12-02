<template>
    <div class="user">
        <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from "./config/search.config";
import PageSearch from "@/components/page-search/src/page-search.vue";
</script>

<style scoped></style>
