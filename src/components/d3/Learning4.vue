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
        var width = 300, height = 600;
        var svg = d3.select("#bb").append("svg")
            .attr("width", width)
            .attr("height", height);

        var dataset = [
            ["小米", 60.8], ["三星", 58.4], ["联想", 47.3],
            [" 苹果", 46.6], ["华为", 41.3], ["酷派", 40.1],
            [" 其他", 111.5]
        ];
        var pie = d3.pie()
            .startAngle(Math.PI * 0.2)
            .endAngle(Math.PI * 1.5)
            .value(function (d) { return d[1]; });
        var piedata = pie(dataset);

        console.log(piedata);

        var outerRadius = width / 3
        var innerRadius = 0;
        var arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
        var color = d3.schemeCategory10;

        var arcs = svg.selectAll("g")
            .data(piedata)
            .enter()
            .append("g")
            .attr("transform",
                "translate(" + width / 2 + "," + height / 2 + ")");
        arcs.append("path")
            .attr("fill", (d, i) => color[i])
            .attr("d", d => arc(d));
        arcs.append("text")
            .attr("transform", d => `translate(${arc.centroid(d)[0] * 1.4}, ${arc.centroid(d)[1] * 1.4})`)
            .attr("text-anchor", "middle")
            .text(function (d) {
                var percent = Number(d.value) / d3.sum(dataset, d => d[1]) * 100
                return percent.toFixed(1) + "%";
            });
        arcs.append("line")
            .attr("stroke", "black")
            .attr("x1", function (d) { return arc.centroid(d)[0] * 2; })
            .attr("y1", function (d) { return arc.centroid(d)[1] * 2; })
            .attr("x2", function (d) { return arc.centroid(d)[0] * 2.2; })
            .attr("y2", function (d) { return arc.centroid(d)[1] * 2.2; });
        arcs.append("text")
            .attr("transform", d => `translate(${arc.centroid(d)[0] * 2.5}, ${arc.centroid(d)[1] * 2.5})`)
            .attr("text-anchor", "middle")
            .text(d => d.data[0]);
    },
    methods: {

    }
}
</script>

<style scoped></style>