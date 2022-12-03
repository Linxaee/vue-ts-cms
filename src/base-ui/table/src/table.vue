<template>
    <div class="lin-table">
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
                            {{ scope.row[propItem.prop] }}
                        </slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
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
    }>(),
    {
        showIndexColumn: true,
        showSelectColumn: false
    }
);

const emit = defineEmits(["selectionChange"]);

const handleSelectChange = (value: unknown[]) => {
    emit("selectionChange", value);
};
</script>

<style scoped></style>
