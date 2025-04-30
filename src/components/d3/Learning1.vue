/* eslint-disable */
<template>
    <div class="svg">
        <svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                <rect x="20" y="20" width="200" height="100" rx="20" ry="20"
                    style="fill: steelblue; stroke: blue; stroke-width: 4; opacity: 0.5;"></rect>
                <circle cx="150" cy="150" r="80" style="fill: yellow; stroke: black; stroke-width: 4;"></circle>
                <ellipse cx="350" cy="150" rx="110" ry="80" style="fill: yellow; stroke: black; stroke-width: 4;">
                </ellipse>
                <line x1="20" y1="20" x2="300" y2="100" stroke="black" marker-end="url(#arrow)"></line>
                <polygon points="100,20 20,90 60, 160 140,160 180,90"
                    style="fill: LawnGreen; stroke: black; stroke-width: 3;"></polygon>
                <polyline points="100,20 20,90 60, 160 140,160 180,90"
                    style="fill: white; stroke: black; stroke-width: 3;" transform="translate(200,0)"></polyline>
                <text x="200" y="150" dx="-5" dy="5" textLength="90" rotate="180" filter="url(#Gaussian)">
                    Hello World! <tspan fill="red">D3</tspan>
                </text>
            </g>
        </svg>
    </div>
    <div id="bb">
        <p>1</p>
        <p>2</p>
        <p>3</p>
    </div>
</template>

<script>
import * as d3 from "d3";

export default {
    name: 'D3Learning1',
    mounted: () => {
        var p = d3.select("#bb").selectAll("p");

        p.datum("NO NAME")
            .append("span")
            .text(function (d, i) {
                return " " + d + " " + i;
            });
        
        var update = p.data([1,2,2,3,5,4,6]);
        var enter = update.enter();
        var exit = update.exit();

        update.append("span")
            .text(function (d,i) {
                return " " + d + " " + i;
            })
        enter.append("p").append("span").text(function (d,i) {
                return " " + d + " " + i;
            })
        exit.remove();
    }
}
</script>

<style scoped>

</style>