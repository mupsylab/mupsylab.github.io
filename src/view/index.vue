<script setup lang="ts">
const r: number[] = [];
while (r.length < 12) {
    r.push(r.length + 1);
}
</script>

<template>
    <div v-for="item in r" class="c">{{ item }}</div>
</template>

<style scoped>
.c {
    background-color: var(--opacity-red-25);
}
</style>