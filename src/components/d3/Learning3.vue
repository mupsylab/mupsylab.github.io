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
        var width = 300;
        var height = 300;

        var svg = d3.select("#bb")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        var xAxisWidth = 300,
            yAxisWidth = 300;

        var center = [
            [0.5, 0.5],
            [0.7, 0.8],
            [0.4, 0.9],
            [0.11, 0.32],
            [0.88, 0.25],
            [0.75, 0.12],
            [0.5, 0.1],
            [0.2, 0.3],
            [0.4, 0.1]
        ];
        var xScale = d3.scaleLinear()
            .domain([0, 1.2 * d3.max(center, function (d) { return d[0]; })])
            .range([0, xAxisWidth]);
        var yScale = d3.scaleLinear()
            .domain([0, 1.2 * d3.max(center, function (d) { return d[1]; })])
            .range([0, yAxisWidth]);
        svg.append("g")
            .call(d3.axisLeft(yScale));
        svg.append("g")
            .call(d3.axisBottom(xScale));
        var padding = { top: 30, right: 30, bottom: 30, left: 30 };

        var cirlce = svg.append("g").selectAll("circle")
            .data(center)   //绑定数据 
            .enter()   //获取enter部分 
            .append("circle")  //添加circle元素，使其与绑定数组的长度一致 
            .attr("fill", "black")    //设置颜色为black 
            .attr("cx", function (d) {   //设置圆心的x坐标 
                return padding.left + xScale(d[0]);
            })
            .attr("cy", function (d) {   //设置圆心的y坐标 
                return height - padding.bottom - yScale(d[1]);
            })
            .attr("r", 5);
    },
    methods: {

    }
}
</script>

<style scoped></style>