<template>
    <div class="lin-table">
        <el-table :data="listData" border style="width: 100%">
            <template v-for="propItem in propList" :key="propItem.prop">
                <el-table-column v-bind="propItem" align="center">
                    <template #default="scope">
                        <slot :name="propItem.prop" :row="scope.row">
                            {{ scope.row[propItem.prop] }}
                        </slot>
                    </template>
                </el-table-column>
            </template>
        </el-table>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import { IPropListItem } from "../types/index";
const props = defineProps<{ listData: Array<unknown>; propList: Array<IPropListItem> }>();
</script>

<style scoped></style>
