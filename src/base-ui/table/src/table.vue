<template>
    <div class="lin-table">
        <div class="header">
            <slot name="header"
                ><div class="title">
                    <strong>{{ title }}</strong>
                </div>
                <div class="handler">
                    <slot name="headerHandler"></slot>
                </div>
            </slot>
        </div>
        <el-table
            :data="listData"
            border
            style="width: 100%"
            @selection-change="handleSelectChange"
        >
            <el-table-column
                v-if="showSelectColumn"
                align="center"
                type="selection"
                width="80"
            ></el-table-column>
            <el-table-column
                v-if="showIndexColumn"
                label="序号"
                align="center"
                type="index"
                width="80"
            ></el-table-column>
            <template v-for="propItem in propList" :key="propItem.prop">
                <el-table-column v-bind="propItem" align="center">
                    <template #default="scope">
                        <slot :name="propItem.slotName ?? propItem.prop" :row="scope.row">
                            {{ propItem.prop ? scope.row[propItem.prop] : "" }}
                        </slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
        <div class="footer">
            <slot name="footer"
                ><el-pagination
                    v-model:current-page="currentPage4"
                    v-model:page-size="pageSize4"
                    :page-sizes="[100, 200, 300, 400]"
                    :small="small"
                    :disabled="disabled"
                    :background="background"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
            /></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { IPropListItem } from "../types/index";

const props = withDefaults(
    defineProps<{
        listData: unknown[];
        propList: IPropListItem[];
        showIndexColumn?: boolean;
        showSelectColumn?: boolean;
        title?: string;
    }>(),
    {
        showIndexColumn: true,
        showSelectColumn: false,
        title: ""
    }
);

const emit = defineEmits(["selectionChange"]);

const handleSelectChange = (value: unknown[]) => {
    emit("selectionChange", value);
};
</script>

<style lang="less" scoped>
.lin-table {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 8px 0;
    }
    .footer {
        padding-top: 20px;
    }
}
</style>
