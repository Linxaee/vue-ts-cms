<template>
    <div class="goods">
        <page-content :contentTableConfig="contentTableConfig" pageName="goods">
            <template #image="scope">
                <el-image
                    style="width: 60px; height: 60px"
                    :src="scope.row.imgUrl"
                    :preview-src-list="[scope.row.imgUrl]"
                >
                </el-image>
            </template>
            <template #oldPrice="scope">{{ "¥" + scope.row.oldPrice }}</template>
        </page-content>
    </div>
</template>

<script lang="ts" setup>
import PageContent from "@/components/page-content";
import { contentTableConfig } from "./config/content.config";
</script>

<style scoped></style>
