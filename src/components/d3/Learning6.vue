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
        const root = d3.hierarchy({
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
        }) // 声明节点
        const tree = d3.tree(); // 声明节点展现形式
        var width = 600, height = 600;
        var svg = d3.select("#bb").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(100, 100)")

        const descendants = root.descendants();
        const label = d => d.name;
        const L = descendants.map(d => label(d.data, d));

        tree.size([500, 500])
        tree.nodeSize([20, 600 / (root.height + 2)])(root)

        svg.append("g")
            .attr("fill", "none")
            .attr("stroke", "white")
            .selectAll("path")
            .data(root.links())
            .join("path")
            .attr("d", d3.link(d3.curveBumpX).x(d => d.y).y(d => d.x));

        const node = svg.append("g")
            .selectAll("a")
            .data(root.descendants())
            .join("a")
            .attr("transform", d => `translate(${d.y}, ${d.x})`);

        node.append("circle")
            .attr("fill", d => d.children ? "white" : "yellow")
            .attr("r", 3)

        node.append("text")
            .attr("dy", "0.32em")
            .attr("x", d => d.children ? -6 : 6)
            .attr("text-anchor", d => d.children ? "end" : "start")
            .attr("paint-order", "stroke")
            .text((d, i) => L[i])
    }
}
</script>

<style scoped></style>