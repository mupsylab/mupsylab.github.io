<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import layout from "@/layout/GridLayout.vue";

const router = useRouter();

const nav: Array<{
  name: string,
  to: string,
  child: Array<{
    name: string,
    to: string
  }>
}> = [];
const navItem: Record<string, Array<{
  name: string,
  to: string
}>> = {};
router.options.routes.forEach((item) => {
  if (!/(\S+)-(\S+)/.test(item.name as string)) return; // 排除404页面
  const [_, root, name] = (item.name as string).match(/(\S+)-(\S+)/) || [undefined, "", ""];
  if (root in navItem) {
    navItem[root].push({ name, to: item.path });
  } else {
    navItem[root] = [{ name, to: item.path }];
  }
});
Object.keys(navItem).forEach((key) => {
  navItem[key].sort((a, b) => {
    const ia = a.name.match(/\d+/) != null ? parseInt((a.name.match(/\d+/) as Array<string>)[0]) : 0;
    const ib = b.name.match(/\d+/) ? parseInt((b.name.match(/\d+/) as Array<string>)[0]) : 0;
    return ia - ib;
  });
  nav.push({ name: key, to: `/${key}`, child: navItem[key] });
});
</script>

<template>
  <layout :nav="nav" title="Vite 模板">
    <RouterView></RouterView>
  </layout>
</template>

<style scoped></style>