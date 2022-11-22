<template>
    <div>main</div>
    <div>{{ store.state.name }}</div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
</script>

<style scoped></style>
