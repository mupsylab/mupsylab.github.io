<script setup lang="ts">
import * as d3 from "d3";
import { onMounted } from "vue";
onMounted(() => {
    const p = d3.select("#bb").selectAll("p");

    p.datum("NO NAME")
        .append("span")
        .text(function (d, i) {
            return " " + d + " " + i;
        });

    const update = p.data([1, 2, 2, 3, 5, 4, 6]);
    const enter = update.enter();
    const exit = update.exit();

    update.append("span")
        .text(function (d, i) {
            return " " + d + " " + i;
        })
    enter.append("p").append("span").text(function (d, i) {
        return " " + d + " " + i;
    })
    exit.remove();
});
</script>

<template>
    <div id="bb">
        <p v-for="ic in [1, 2, 3]">{{ ic }}</p>
    </div>
    <div class="svg">
        <svg width="320" height="600" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="arrow" markerUnits="strokeWidth" markerWidth="12" markerHeight="12" viewBox="0 0 12 12"
                    refX="6" refY="6" orient="auto">
                    <path d="M2,2 L10,6 L2,10 L6,6 L2,2" style="fill: black;"></path>
                </marker>
                <filter id="Gaussian">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                </filter>
            </defs>
            <g>
                <rect x="50" y="0" width="220" height="80" rx="20" ry="20"
                    style="fill: steelblue; stroke: blue; stroke-width: 4; opacity: 0.5;"></rect>
                <circle cx="160" cy="160" r="80" style="fill: yellow; stroke: black; stroke-width: 4;"></circle>
                <ellipse cx="160" cy="320" rx="110" ry="80" style="fill: yellow; stroke: black; stroke-width: 4;"></ellipse>
                <line x1="50" y1="320" x2="160" y2="320" stroke="black" marker-end="url(#arrow)"></line>
                <polygon points="80,400 0,470 40,540 120,540 160,470"
                    style="fill: LawnGreen; stroke: black; stroke-width: 3;" filter="url(#Gaussian)"></polygon>
                <polyline points="80,400 0,470 40,540 120,540 160,470"
                    style="fill: white; stroke: black; stroke-width: 3;" transform="translate(160,0)"></polyline>
                <text x="160" y="160" dx="-60" dy="0" textLength="120" rotate="0">
                    Hello World! <tspan fill="red">D3</tspan>
                </text>
                <line x1="160" y1="0" x2="160" y2="600" stroke="grey"></line>
            </g>
        </svg>
    </div>
</template>

<style scoped>
#bb, .svg {
    grid-column: 1 / 13;
}
</style>