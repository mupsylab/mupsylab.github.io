<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import { onUnmounted } from "vue";
import { MoreFilled } from '@element-plus/icons-vue';

import SwitchTheme from '@/components/SwitchTheme.vue';

const isMobile = ref(false);
const judgeDevice = () => { isMobile.value = window.innerWidth < 600; }
onMounted(() => { window.addEventListener("resize", judgeDevice); judgeDevice(); });
onUnmounted(() => { window.removeEventListener("resize", judgeDevice); });

interface Navigation {
    name: string,
    to: string,
    child?: Array<Navigation>
}
const props = defineProps<{ nav: Array<Navigation>, title: string }>();
</script>

<template>
    <el-container style="text-align: center;">
        <el-header>
            <el-menu :router="true" :ellipsis="false" mode="horizontal">
                <el-menu-item index="/">{{ props.title }}</el-menu-item>
                <template v-if="!isMobile">
                    <template v-for="item in props.nav" :key="item.name">
                        <el-sub-menu v-if="item.child" :index="item.to">
                            <template #title>{{ item.name }}</template>
                            <el-menu-item v-for="child in item.child" :key="child.name" :index="child.to">{{ child.name
                                }}</el-menu-item>
                        </el-sub-menu>
                        <el-menu-item v-else :index="item.to">{{ item.name }}</el-menu-item>
                    </template>
                    <el-menu-item>
                        <SwitchTheme></SwitchTheme>
                    </el-menu-item>
                </template>
                <template v-else>
                    <el-menu-item>
                        <el-dropdown placement="bottom-end" trigger="click">
                            <el-icon size="33">
                                <MoreFilled />
                            </el-icon>
                            <template #dropdown>
                                <el-menu :router="true">
                                    <template v-for="item in props.nav" :key="item.name">
                                        <el-sub-menu v-if="item.child" :index="item.to">
                                            <template #title>{{ item.name }}</template>
                                            <el-menu-item v-for="child in item.child" :key="child.name"
                                                :index="child.to">{{ child.name }}</el-menu-item>
                                        </el-sub-menu>
                                        <el-menu-item v-else :index="item.to">{{ item.name }}</el-menu-item>
                                    </template>
                                    <el-menu-item>
                                        <SwitchTheme></SwitchTheme>
                                    </el-menu-item>
                                </el-menu>
                            </template>
                        </el-dropdown>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-header>
        <el-main>
            <slot></slot>
        </el-main>
    </el-container>
</template>

<style>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
}

.el-popper {
    max-height: 300px;
    overflow: auto;
}
</style>

<style lang="css" scoped>
.el-main {
    display: grid;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 10px;
}
</style>