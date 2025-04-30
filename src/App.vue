<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import { onMounted } from 'vue';
import layout from "@/layout/GridLayout.vue";

const router = useRouter();

const nav = [];
const navItem = {};
router.options.routes.forEach((item) => {
  if (!/(\S+)-(\S+)/.test(item.name)) return; // 排除404页面
  const [_, root, name] = item.name.match(/(\S+)-(\S+)/) || [undefined, "", ""];
  if (root in navItem) {
    navItem[root].push({ name, to: item.path });
  } else {
    navItem[root] = [{ name, to: item.path }];
  }
});
Object.keys(navItem).forEach((key) => {
  nav.push({ name: key, to: `/${key}`, child: navItem[key] });
});

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