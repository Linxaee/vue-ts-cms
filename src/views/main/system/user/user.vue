<template>
    <div class="user">
        <lin-form v-bind="searchFormConfig" />
    </div>
</template>

<script lang="ts" setup>
import LinForm from "@/base-ui/form";
import { searchFormConfig } from "./config/search.config";
</script>

<style scoped></style>
