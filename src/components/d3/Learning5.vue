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
        console.log("asd ",d3.hierarchy({
            "name": "Eve",
            "children": [
                {
                    "name": "Cain"
                },
                {
                    "name": "Seth",
                    "children": [
                        {
                            "name": "Enos"
                        },
                        {
                            "name": "Noam"
                        }
                    ]
                },
                {
                    "name": "Abel"
                },
                {
                    "name": "Awan",
                    "children": [
                        {
                            "name": "Enoch"
                        }
                    ]
                },
                {
                    "name": "Azura"
                }
            ]
        }))
        var width = 600, height = 600;
        var svg = d3.select("#bb").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")

        var nodes = [
            { name: "0" },
            { name: "1" },
            { name: "2" },
            { name: "3" },
            { name: "4" },
            { name: "5" },
            { name: "6" },
        ];
        var edges = [
            { source: 0, target: 1 },
            { source: 0, target: 2 },
            { source: 0, target: 3 },
            { source: 1, target: 4 },
            { source: 1, target: 5 },
            { source: 1, target: 6 },
        ];

        var force = d3.forceSimulation(nodes)
            .force("charge", d3.forceManyBody().strength(d => -400))
            .force("link", d3.forceLink(edges).distance(d => 90))
            .force("center", d3.forceCenter().x(300).y(150))

        console.log(nodes);

        var color = d3.schemeCategory10;
        var lines = svg.selectAll(".forceLine")
            .data(edges)
            .enter()
            .append("line")
            .attr("class", "forceLine")
            .style("stroke", "white")

        var circles = svg.selectAll(".forceCircle")
            .data(nodes)
            .enter()
            .append("circle")
            .attr("class", "forceCircle")
            .attr("r", 20)
            .style("fill", (d, i) => color[i])

        var texts = svg.selectAll(".forceText")
            .data(nodes)
            .enter()
            .append("text")
            .attr("class", "forceText")
            .attr("x", d => d.x)
            .attr("y", d => d.y)
            .attr("dy", ".3em")
            .text(d => d.name)

        force.on("tick", () => {
            //更新连线的端点坐标 
            lines.attr("x1", function (d) { return d.source.x; });
            lines.attr("y1", function (d) { return d.source.y; });
            lines.attr("x2", function (d) { return d.target.x; });
            lines.attr("y2", function (d) { return d.target.y; });

            //更新节点坐标 
            circles.attr("cx", function (d) { return d.x; });
            circles.attr("cy", function (d) { return d.y; });

            //更新节点文字的坐标 
            texts.attr("x", function (d) { return d.x; });
            texts.attr("y", function (d) { return d.y; });
        });

        const drag = d3.drag()
            .on("drag", function () {
                console.log(this)
                d3.select(this).style("fill", "yellow")
            })
            .on("end", function (d, i) {
                d3.select(this).style("fill", color[i])
            })
        circles.call(drag)
    },
    methods: {

    }
}
</script>

<style scoped></style>