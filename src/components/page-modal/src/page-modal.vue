<template>
    <div class="page-modal">
        <el-dialog title="新建用户" v-model="dialogVisible" width="30%" center destroy-on-close>
            <LinForm v-bind="modalConfig" v-model="formData"></LinForm>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="handleConfirmClick"> 确 定 </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";

import LinForm from "@/base-ui/form";

const props = withDefaults(
    defineProps<{
        modalConfig: any;
        defaultInfo: any;
        pageName: string;
    }>(),
    { defaultInfo: () => ({}) }
);

const dialogVisible = ref(false);
const formData = ref<any>({});
watch(
    () => props.defaultInfo,
    (newValue) => {
        // 点击编辑的时候，formData若为空对象，newValue是scope.row，赋值给formData所以有值
        for (const item of props.modalConfig.formItems) {
            formData.value[`${item.field}`] = newValue[`${item.field}`];
        }
    }
);

// 点击确定按钮的逻辑
const store = useStore();
const handleConfirmClick = () => {
    dialogVisible.value = false;
    if (Object.keys(props.defaultInfo).length) {
        // 编辑
        console.log("编辑用户");
        store.dispatch("system/editPageDataAction", {
            pageName: props.pageName,
            editData: { ...formData.value },
            id: props.defaultInfo.id
        });
    } else {
        // 新建
        console.log("新建用户");
        store.dispatch("system/createPageDataAction", {
            pageName: props.pageName,
            newData: { ...formData.value }
        });
    }
};

defineExpose({ dialogVisible });
</script>

<style scoped></style>
