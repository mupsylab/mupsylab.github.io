<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
    <el-card class="box">
        <div>test</div>
    </el-card>
</template>

<style scoped>
.box {
    width: 400px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>