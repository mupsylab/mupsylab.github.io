import { createRouter, createWebHashHistory } from 'vue-router'

import index from '@/view/index.vue';

const routes = [
  {
    path: "/",
    name: "index",
    component: index
  }
];

const files = import.meta.glob('@/components/**/*.vue', {
  eager: false,
}) as Record<string, any>;
const pattern = /components\/(.*?)\/(\S+)\.vue/;
Object.keys(files).map(async (key) => {
  if (!pattern.test(key)) { return; }
  const [_, root, name] = key.match(pattern) || [undefined, "", ""];
  routes.push({
    path: `/${root}/${name}`,
    name: `${root}-${name}`,
    component: files[key]
  });
});


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
