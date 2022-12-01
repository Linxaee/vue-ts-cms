import { defineProps } from 'vue';
<template>
    <div>
        <el-form label-width="100px">
            <el-row>
                <template v-for="(item, index) in formItems" :key="item.label"
                    ><el-col :span="8">
                        <el-form-item :label="item.label">
                            <template v-if="item.type === 'input' || item.type === 'password'">
                                <el-input
                                    :placeholder="item.placeholder"
                                    :show-password="item.type === 'password'"
                                    v-bind="item.otherOptions"
                                />
                            </template>
                            <template v-else-if="item.type === 'select'">
                                <el-select
                                    :placeholder="item.placeholder"
                                    style="width: 100%"
                                    v-bind="item.otherOptions"
                                >
                                    <el-option
                                        v-for="option in item.options"
                                        :key="option.value"
                                        :value="option.value"
                                        >{{ option.title }}</el-option
                                    >
                                </el-select>
                            </template>
                            <template v-else-if="item.type === 'datepicker'">
                                <el-date-picker v-bind="item.otherOptions" style="width: 100%" />
                            </template>
                        </el-form-item> </el-col
                ></template>
            </el-row>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from "vue";
import { IFormItem } from "../types";
defineProps({
    formItems: {
        type: Array as PropType<IFormItem[]>,
        default: () => []
    }
});
// const formItems =
</script>

<style lang="less" scoped></style>
