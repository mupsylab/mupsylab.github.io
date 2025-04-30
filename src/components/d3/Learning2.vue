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
            padding: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            },
            rectStep: 35,
            rectWidth: 30,
            width: 400,
            height: 400,
            dataset: [50, 43, 120, 87, 99, 167, 142]
        }
    },
    mounted: function () {
        var dataset = this.dataset;
        var width = this.width;
        var height = this.height;

        var svg = d3.select("#bb")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        var padding = this.padding

        var rectStep = this.rectStep;
        var rectWidth = this.rectWidth;

        var rect = svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("fill", "stellblue")
            .attr("x", function (d, i) {
                return padding.left + i * rectStep;
            })
            .attr("y", function (d, i) {
                return height - padding.bottom - d;
            })
            .attr("width", rectWidth)
            .attr("height", function (d) {
                return d;
            });
        var text = svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .attr("fill", "white")
            .attr("font-size", "14px")
            .attr("text-anchor", "middle")
            .attr("x", function (d, i) {
                return padding.left + i * rectStep;
            })
            .attr("y", function (d) {
                return height - padding.bottom - d;
            })
            .attr("dx", rectWidth / 2)
            .attr("dy", "1em")
            .text(function (d) { return d; })

        var xScale = d3.scaleLinear()
            .domain([0,10])
            .range([0,300]);
        var axis = d3.axisBottom(xScale);
        var gAxis = svg.append("g")
            .attr("transform", "translate(0, 382)")
            .call(axis);
    },
    methods: {
        draw() {
            var _this = this;
            var updateRect = d3.select("#bb").select("svg").selectAll("rect")
                .data(this.dataset.sort(d3.descending));
            var enterRect = updateRect.enter();
            var exitRect = updateRect.exit();

            updateRect.attr("fill", "steelblue")
                .attr("x", function (d, i) {
                    return _this.padding.left + i * _this.rectStep;
                })
                .attr("y", function(d, i) {
                    return _this.height - _this.padding.bottom - d
                })
                .attr("width", _this.rectWidth)
                .attr("height", function(d) {
                    return d;
                });
            enterRect.append("rect")
                .attr("fill", "steelblue")
                .attr("x", function (d, i) {
                    return _this.padding.left + i * _this.rectStep;
                })
                .attr("y", function(d, i) {
                    return _this.height - _this.padding.bottom - d
                })
                .attr("width", _this.rectWidth)
                .attr("height", function(d) {
                    return d;
                });
            exitRect.remove();

            var updateText = d3.select("#bb").select("svg").selectAll("text")
                .data(this.dataset)
            var enterText = updateText.enter();
            var exitText = updateText.exit();
        }
    }
}
</script>

<style scoped></style>