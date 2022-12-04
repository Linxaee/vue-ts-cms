<template>
    <div class="lin-form">
        <div class="header"><slot name="title"></slot></div>
        <el-form :label-width="labelWidth">
            <el-row>
                <template v-for="(item, index) in formItems" :key="item.label"
                    ><el-col v-bind="colLayout">
                        <el-form-item :label="item.label" :rules="item.rules" :style="itemStyle">
                            <template v-if="item.type === 'input' || item.type === 'password'">
                                <el-input
                                    :placeholder="item.placeholder"
                                    :show-password="item.type === 'password'"
                                    v-bind="item.otherOptions"
                                    v-model="formData[item.field]"
                                />
                            </template>
                            <template v-else-if="item.type === 'select'">
                                <el-select
                                    :placeholder="item.placeholder"
                                    style="width: 100%"
                                    v-bind="item.otherOptions"
                                    v-model="formData[item.field]"
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
                                <el-date-picker
                                    v-bind="item.otherOptions"
                                    style="width: 100%"
                                    v-model="formData[item.field]"
                                />
                            </template>
                        </el-form-item> </el-col
                ></template>
            </el-row>
        </el-form>
        <div class="footer"><slot name="footer"></slot></div>
    </div>
</template>

<script lang="ts" setup>
import { PropType, ref, watch } from "vue";
import { IFormItem } from "../index";

const props = defineProps({
    modelValue: {
        type: Object,
        required: true
    },
    // 表单项
    formItems: {
        type: Array as PropType<IFormItem[]>,
        default: () => []
    },
    // 标签宽度
    labelWidth: {
        type: String,
        default: "100px"
    },
    // menu-item样式
    itemStyle: {
        type: Object,
        default: () => ({
            padding: "10px 40px"
        })
    },
    // col布局
    colLayout: {
        type: Object,
        default: () => ({
            xl: 6, // 1920px ->4个
            lg: 8,
            md: 12,
            sm: 24,
            xs: 24
        })
    }
});
const emit = defineEmits(["update:modelValue"]);

// 为保证单向数据流，结构出props里的modelValue再修改，最后通过watch深度监听发送update事件修改父组件的formData
const formData = ref({ ...props.modelValue });

watch(
    formData,
    (newValue) => {
        emit("update:modelValue", newValue);
    },
    { deep: true }
);
</script>

<style lang="less" scoped>
.lin-form {
    padding-top: 20px;
    .form-item {
        padding: 5px 30px;
    }
    .footer {
        text-align: right;
        padding: 20px;
    }
}
</style>
