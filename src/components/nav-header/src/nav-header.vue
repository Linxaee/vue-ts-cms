<template>
    <div class="nav-header">
        <i class="fold-menu" @click="handleFoldClick"
            ><el-icon> <component :is="isFold ? 'Expand' : 'Fold'" /> </el-icon
        ></i>
    </div>
</template>

<script lang="ts" setup>
import { defineEmits, ref } from "vue";

const emit = defineEmits(["foldChange"]);
const isFold = ref(false);
const handleFoldClick = () => {
    isFold.value = !isFold.value;
    emit("foldChange", isFold.value);
};
</script>

<style scoped lang="less">
.nav-header {
    .fold-menu {
        font-size: 30px;
        cursor: pointer;
    }
}
</style>
