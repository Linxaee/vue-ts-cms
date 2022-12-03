<template>
    <div class="user">
        <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
        <div class="content">
            <LinTable :listData="userList" :propList="propList">
                <template #enable="scope">
                    <el-button :type="scope.row.enable ? 'success' : 'danger'" plain>
                        {{ scope.row.enable ? "启用" : "禁用" }}</el-button
                    >
                </template>
                <template #createAt="scope">
                    <span v-format-time="'YYYY/MM/DD HH:MM'"> {{ scope.row.createAt }}</span>
                </template>
            </LinTable>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { searchFormConfig } from "./config/search.config";
import PageSearch from "@/components/page-search/src/page-search.vue";
import LinTable from "@/base-ui/table/index";

import { useStore } from "@/store";
import { IGetPagePayload } from "@/store/main/system/types";
import { computed } from "vue";
import { IPropListItem } from "@/base-ui/table/types";

const store = useStore();

store.dispatch<IGetPagePayload>({
    type: "system/getPageListAction",
    pageUrl: "/users/list",
    queryInfo: {
        offset: 0,
        size: 10
    }
});

const userList = computed(() => store.state.system.userList);
const userCount = computed(() => store.state.system.userCount);
const propList: IPropListItem[] = [
    { prop: "name", label: "用户名", minWidth: "100" },
    { prop: "realname", label: "真实姓名", minWidth: "100" },
    { prop: "cellphone", label: "手机号码", minWidth: "100" },
    { prop: "enable", label: "状态", minWidth: "100" },
    {
        prop: "createAt",
        label: "创建时间",
        minWidth: "250"
    },
    {
        prop: "updateAt",
        label: "更新时间",
        minWidth: "250"
    }
];
</script>

<style scoped>
.content {
    padding: 20px;
}
</style>
