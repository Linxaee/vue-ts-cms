<template>
    <div class="page-content">
        <LinTable v-bind="contentTableConfig" :listData="userList">
            <template #headerHandler>
                <el-button>新建用户</el-button>
                <el-button :icon="Refresh" type="primary"></el-button>
            </template>
            <template #enable="scope">
                <el-button :type="scope.row.enable ? 'success' : 'danger'" plain>
                    {{ scope.row.enable ? "启用" : "禁用" }}</el-button
                >
            </template>
            <template #createAt="scope">
                <span v-format-time="'YYYY/MM/DD HH:MM'"> {{ scope.row.createAt }}</span>
            </template>
            <template #updateAt="scope">
                <span v-format-time="'YYYY/MM/DD HH:MM'"> {{ scope.row.updateAt }}</span>
            </template>
            <template #handler>
                <div class="handler-btns">
                    <el-button-group class="ml-4">
                        <el-button type="primary" :icon="Edit" size="small" plain />
                        <el-button type="primary" :icon="Delete" size="small" plain />
                    </el-button-group>
                </div>
            </template>
        </LinTable>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import LinTable from "@/base-ui/table";
import { useStore } from "@/store";
import { Delete, Edit, Refresh } from "@element-plus/icons-vue";
import { IGetPagePayload } from "@/store/main/system/types";

const props = defineProps<{
    contentTableConfig: any;
    pageName: string;
}>();

const store = useStore();
store.dispatch<IGetPagePayload>({
    type: "system/getPageListAction",
    pageName: props.pageName,
    queryInfo: {
        offset: 0,
        size: 10
    }
});

const userList = computed(() => store.getters[`system/pageListData`](props.pageName));
// const userCount = computed(() => store.state.system.userCount)
</script>

<style scoped>
.page-content {
    padding: 20px;
    border-top: 20px solid #f5f5f5;
}
</style>
