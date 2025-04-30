<template>
    <div id="bb" @click="draw">
    </div>
</template>

<script>
/* eslint-disable */
import * as d3 from "d3";

export default {
    name: 'D3Learning1',
    data() {
        return {

        }
    },
    mounted: function () {
        var width = 600, height = 600;
        var svg = d3.select("#bb").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")

        var rand = d3.randomNormal(170, 10);
        const dataset = [];
        for (let i = 0; i < 1000; i++) {
            dataset.push(rand());
        }

        var bin = d3.bin()

        var buckets = bin(dataset)
        console.log(buckets)

        var x = d3.scaleLinear()
            .domain([10, 170])
            .range([30, width - 30])
            .clamp(false)
        var colors = ["black"]
            .concat(d3.schemeCategory10)
            .concat(d3.schemePaired)
            .concat(d3.schemePastel1)
            .concat(d3.schemePastel2)
        const binColor = d3.scaleThreshold()
            .domain(buckets.map(d => d.x0))
            .range(colors)

        svg.selectAll("rect")
            .data(buckets)
            .join("rect")
            .attr("y", d => 10)
            .attr("height", 100 - 2 * 10)
            .attr("x", d => (x(d.x0) + 1) | 0)
            .attr("width", d => (x(d.x1) | 0) - (x(d.x0) | 0) - 2)
            .attr("stroke", d => binColor(d.x0))
            .attr("fill", "none")
    }
}
</script>

<style scoped></style>