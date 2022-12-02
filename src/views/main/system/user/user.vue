<template>
    <div class="user">
        <lin-form v-bind="searchFormConfig" v-model="formData" />
    </div>
</template>

<script lang="ts" setup>
import LinForm from "@/base-ui/form";
import { ref } from "vue";
import { searchFormConfig } from "./config/search.config";
const formData = ref({
    createTime: "",
    id: "",
    name: "",
    password: "",
    sport: ""
});
</script>

<style scoped></style>
