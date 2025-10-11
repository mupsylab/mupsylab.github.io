<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue';
import { EliminateConsole } from './Eliminate/Index';


const dom = ref() as Ref<HTMLDivElement>;
onMounted(() => {
    const instance = new EliminateConsole({
        width: 500,
        height: 500,
        cols: 5,
        rows: 5,
        gap: 5
    });
    dom.value.appendChild(instance.getCanvas());
    instance.draw();
});
</script>

<template>
    <div class="box" ref="dom">
    </div>
</template>

<style lang="css" scoped>
.box {
    grid-column: 1 / 13;
}
</style>


