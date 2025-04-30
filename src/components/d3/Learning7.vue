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
            .attr("transform", `translate(${width / 2}, ${height / 2})`)
        
        const continent = ["亚洲", "欧洲", "非洲"];
        const population = [
            [9000, 870, 3000],
            [3400, 8000, 2300],
            [2000, 2000, 7700]
        ];
        const chord = d3.chord()
            .padAngle(0.03)
            .sortSubgroups(d3.ascending)(population);
        console.log(chord)
        var gOuter = svg.append("g"), gInner = svg.append("g");

        var color = d3.schemeCategory10;
        var innerRadius = width / 2 * 0.6,
            outerRadius = innerRadius * 1.1;
        
        var arcOuter = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);
        
        gOuter.selectAll(".outerPath")
            .data(chord.groups)
            .enter()
            .append("path")
            .attr("class", "outerPath")
            .style("fill", d => color[d.index])
            .attr("d", arcOuter)

        const ribbon = d3.ribbon()
            .radius(innerRadius);
        
        gInner.selectAll(".innerPath")
            .data(chord)
            .enter()
            .append("path")
            .attr("class", "innerPath")
            .attr("d", d => ribbon(d))
            .style("fill", d => color[d.target.index])
            .style("stroke", "black");

        function fade(opacify) {
            return function(v,g) {
                gInner.selectAll(".innerPath")
                    .filter((d) => {
                        return d.source.index != g.index && d.target.index != g.index;
                    })
                    .transition()
                    .style("opacity", opacify)
            }
        }
        gOuter.selectAll("path")
            .on("mouseover", fade(0.0))
            .on("mouseout", fade(1.0));
    }
}
</script>

<style scoped></style>