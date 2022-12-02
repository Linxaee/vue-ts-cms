<template>
    <div class="nav-header">
        <i class="fold-menu" @click="handleFoldClick"
            ><el-icon> <component :is="isFold ? 'Expand' : 'Fold'" /> </el-icon
        ></i>
        <div class="content">
            <div><lin-breadcrumb :breadcrumbs="breadCrumbs"></lin-breadcrumb></div>
            <user-info />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref, computed, watch, ComputedRef } from "vue";
import LinBreadcrumb, { IBreadcrumb } from "@/base-ui/breadcrumb";
import { pathMapBreadcrumbs } from "../../../utils/mapMenus";
import { useStore } from "@/store";
import { useRoute } from "vue-router";
const emit = defineEmits(["foldChange"]);

const isFold = ref(false);

// 面包屑数据
const store = useStore();
const route = useRoute();
const breadCrumbs: ComputedRef<IBreadcrumb[]> = computed(() =>
    pathMapBreadcrumbs(store.state.login.userMenus, route.path)
);

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
