<template>
    <div class="user">
        <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
    </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from "./config/search.config";
import PageSearch from "@/components/page-search/src/page-search.vue";

import { useStore } from "@/store";
import { IGetPagePayload } from "@/store/main/system/types";
const store = useStore();

store.dispatch<IGetPagePayload>({
    type: "system/getPageListAction",
    pageUrl: "/users/list",
    queryInfo: {
        offset: 0,
        size: 10
    }
});
</script>

<style scoped></style>
