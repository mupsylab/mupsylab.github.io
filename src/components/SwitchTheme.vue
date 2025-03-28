<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Moon, Sunny } from "@element-plus/icons-vue";
import { useColorScheme } from "@/store/ColorScheme";

const cs = useColorScheme();
const isDark = ref(false);

watch(isDark, (newVal: boolean) => {
    cs.switch(newVal ? 'dark' : 'light');
});

onMounted(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        cs.switch("dark");
        isDark.value = true;
    }
});
</script>

<template>
    <el-switch
        v-model="isDark"
        class="dark-switch"
        inline-prompt
        :active-icon="Moon"
        :inactive-icon="Sunny"
    />
</template>

