<template>
    <div class="page-content">
        <LinTable
            v-bind="contentTableConfig"
            :listData="dataList"
            :listCount="dataCount"
            v-model:pageInfo="pageInfo"
        >
            <template #headerHandler>
                <el-button v-if="isCreate">新建用户</el-button>
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
                        <el-button type="primary" :icon="Edit" size="small" plain v-if="isUpdate" />
                        <el-button
                            type="primary"
                            :icon="Delete"
                            size="small"
                            plain
                            v-if="isDelete"
                        />
                    </el-button-group>
                </div>
            </template>

            <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
                <template v-if="item.slotName">
                    <slot :name="item.slotName" :row="scope.row"></slot>
                </template>
            </template>
        </LinTable>
    </div>
</template>

<script lang="ts" setup>
import { computed, defineExpose, ref, watchEffect } from "vue";

import LinTable from "@/base-ui/table";
import { useStore } from "@/store";
import { Delete, Edit, Refresh } from "@element-plus/icons-vue";
import { IGetPagePayload } from "@/store/main/system/types";
import { usePermission } from "@/hooks/usePermission";

const props = defineProps<{
    contentTableConfig: any;
    pageName: string;
}>();

// vuex中获取数据
const store = useStore();

// 0.获取操作的权限
const isCreate = usePermission(props.pageName, "create");
const isUpdate = usePermission(props.pageName, "update");
const isDelete = usePermission(props.pageName, "delete");
const isQuery = usePermission(props.pageName, "query");

// 分页数据
const pageInfo = ref({ currentPage: 1, pageSize: 10 });
const getPageData = (queryInfo: any = {}) => {
    if (!isQuery) return;
    store.dispatch<IGetPagePayload>({
        type: "system/getPageListAction",
        pageName: props.pageName,
        queryInfo: {
            offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
            size: pageInfo.value.pageSize,
            ...queryInfo
        }
    });
};

// 监听pageInfo，动态请求数据
watchEffect(() => getPageData());

// 初始化数据
const dataList = computed(() => store.getters[`system/pageListData`](props.pageName));
const dataCount = computed(() => store.getters[`system/pageListCount`](props.pageName));

// 4.获取其他的动态插槽名称
const otherPropSlots = props.contentTableConfig?.propList.filter((item: any) => {
    if (item.slotName === "status") return false;
    if (item.slotName === "createAt") return false;
    if (item.slotName === "updateAt") return false;
    if (item.slotName === "handler") return false;
    return true;
});

defineExpose({
    getPageData
});
</script>

<style scoped>
.page-content {
    padding: 20px;
    border-top: 20px solid #f5f5f5;
}
</style>
