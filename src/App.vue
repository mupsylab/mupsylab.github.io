<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import layout from "./layout/GridLayout.vue";

const nav = [
  { name: '1', to: '/' },
  { name: '2', to: '/', child: [{ name: '2-1', to: '/' }] }
];

onMounted(() => {
  document.body.addEventListener('touchmove', function (e) {
    e.preventDefault(); // 阻止默认的处理方式(阻止下拉滑动的效果)
  }, { passive: false });
});
</script>

<template>
  <layout :nav="nav" title="Vite 模板">
    <RouterView></RouterView>
  </layout>
</template>

<style scoped>

</style>