<template>
    <div class="nav-header">
        <i class="fold-menu" @click="handleFoldClick"
            ><el-icon> <component :is="isFold ? 'Expand' : 'Fold'" /> </el-icon
        ></i>
        <div class="content">
            <div><lin-breadcrumb></lin-breadcrumb></div>
            <user-info />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from "vue";
import LinBreadcrumb from "@/base-ui/breadcrumb";
const emit = defineEmits(["foldChange"]);
const isFold = ref(false);
const handleFoldClick = () => {
    isFold.value = !isFold.value;
    emit("foldChange", isFold.value);
};
</script>

<style scoped lang="less">
.nav-header {
    display: flex;
    width: 100%;

    .fold-menu {
        font-size: 30px;
        line-height: 22px;
        cursor: pointer;
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        padding: 0 20px;
    }
}
</style>
