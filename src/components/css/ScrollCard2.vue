<script setup lang="ts">
const data = [
    { title: "Section One", desc: "黄昏时分，天际最后一抹霞光悄然隐去，远山轮廓渐渐模糊。微风拂过林梢，带来些许凉意与草木清香。几只倦鸟匆匆归巢，四周愈发静谧。他独自站在窗前，望着这片熟悉的景色，心中涌起一股难以名状的惆怅。往昔的欢声笑语犹在耳畔，如今却只剩回忆。人生或许便是如此，不断告别，又不断前行。" },
    { title: "Section Two", desc: "黄昏时分，天际最后一抹霞光悄然隐去，远山轮廓渐渐模糊。微风拂过林梢，带来些许凉意与草木清香。几只倦鸟匆匆归巢，四周愈发静谧。他独自站在窗前，望着这片熟悉的景色，心中涌起一股难以名状的惆怅。往昔的欢声笑语犹在耳畔，如今却只剩回忆。人生或许便是如此，不断告别，又不断前行。" },
    { title: "Section Three", desc: "黄昏时分，天际最后一抹霞光悄然隐去，远山轮廓渐渐模糊。微风拂过林梢，带来些许凉意与草木清香。几只倦鸟匆匆归巢，四周愈发静谧。他独自站在窗前，望着这片熟悉的景色，心中涌起一股难以名状的惆怅。往昔的欢声笑语犹在耳畔，如今却只剩回忆。人生或许便是如此，不断告别，又不断前行。" },
    { title: "Section Four", desc: "黄昏时分，天际最后一抹霞光悄然隐去，远山轮廓渐渐模糊。微风拂过林梢，带来些许凉意与草木清香。几只倦鸟匆匆归巢，四周愈发静谧。他独自站在窗前，望着这片熟悉的景色，心中涌起一股难以名状的惆怅。往昔的欢声笑语犹在耳畔，如今却只剩回忆。人生或许便是如此，不断告别，又不断前行。" },
];
</script>

<template>
    <div class="container">
        <template v-for="item in data">
            <div class="section">
                <h2>{{ item.title }}</h2>
                <p>{{ item.desc }}</p>
            </div>
        </template>
    </div>
</template>

<style lang="css" scoped>
.container {
    grid-column: 1 / 13;
    text-align: left;
    position: relative;
    overflow: auto;
    scroll-snap-type: y mandatory;
}

.container .section {
    position: sticky;
    width: 100%;
    height: 120%;
    scroll-snap-align: start;
}
</style>
