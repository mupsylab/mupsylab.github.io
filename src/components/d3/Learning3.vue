<script setup lang="ts">
import * as d3 from "d3";
import { onMounted } from "vue";

interface Data {
    name: string,
    value: number,
    rank?: number
}
type SVG = d3.Selection<SVGSVGElement, any, HTMLElement, any>;
type Transition = d3.Transition<any, any, HTMLElement, any>;

import data from "@/assets/data/category-brands.csv?raw";
const dataset = d3.csvParse(data);

/**
 * 最终渲染的bar数量
 */
const n = 12;
const barSize = 48;
const margin = {
    top: 16,
    right: 6,
    bottom: 6,
    left: 0,
};
const formatNumber = d3.format(",d");
const formatDate = d3.utcFormat("%Y");
let tickFormat: any = undefined;

const width = 300;
const height = margin.top + barSize * n + margin.bottom;

const color = (function () {
    const scale = d3.scaleOrdinal(d3.schemeTableau10);
    if (dataset.some(d => d.category !== undefined)) {
        const categoryByName = new Map(dataset.map(d => [d.name, d.category]))
        scale.domain(categoryByName.values());
        return (d: Data) => scale(categoryByName.get(d.name) ?? "");
    }
    return (d: Data) => scale(d.name);
})();
const x = d3.scaleLinear([0, 1], [margin.left, width - margin.right]);
const y = d3.scaleBand<number>()
    .domain(d3.range(n + 1))
    .rangeRound([margin.top, margin.top + barSize * (n + 1 + 0.1)])
    .padding(0.1);

const names = new Set(dataset.map(d => d.name));
const dates = Array.from(
    d3.rollup(dataset, ([d]) => + d.value, d => d.date, d => d.name)
).map<[number, d3.InternMap<string, number>]>(([date, data]) => [+ new Date(date), data])
    .sort(([a], [b]) => d3.ascending(a, b));
const keyframes = (function () {
    const kfs: Array<[Date, Array<Data>]> = [];
    const k = 10;

    let lkb: any, lb: any;
    for (const [[ka, a], [kb, b]] of d3.pairs(dates)) {
        for (let i = 0; i < k; ++i) {
            const t = i / k;
            kfs.push([
                new Date(ka * (1 - t) + kb * t),
                rank((name: string) => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t)
            ]);
        }
        lkb = kb, lb = b;
    }
    kfs.push([new Date(lkb), rank((name: string) => lb.get(name) || 0)]);
    return kfs;
})();
const nameframes = d3.groups(keyframes.flatMap(([, data]) => data), d => d.name)
const prev = new Map(nameframes.flatMap(([, data]) => d3.pairs(data, (a, b) => [b, a])))
const next = new Map(nameframes.flatMap(([, data]) => d3.pairs(data)))

function ticker(svg: SVG) {
    const now = svg.append("text")
        .style("font", `bold ${barSize}px var(--sans-serif)`)
        .style("font-variant-numeric", "tabular-nums")
        .attr("text-anchor", "end")
        .attr("x", width - 6)
        .attr("y", margin.top + barSize * (n - 0.45))
        .attr("dy", "0.32em")
        .text(formatDate(keyframes[0][0]));

    return ([date]: [Date, Array<Data>], transition: Transition) => {
        transition.end().then(() => now.text(formatDate(date)));
    };
}
function axis(svg: SVG) {
    const g = svg.append("g")
        .attr("transform", `translate(0,${margin.top})`);

    const axis = d3.axisTop(x)
        .ticks(width / 160, tickFormat)
        .tickSizeOuter(0)
        .tickSizeInner(-barSize * (n + y.padding()));

    return (_: any, transition: Transition) => {
        g.transition(transition).call(axis);
        g.select(".tick:first-of-type text").remove();
        g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "white");
        g.select(".domain").remove();
    };
}
function bars(svg: SVG) {
    let bar = svg.append("g")
        .attr("fill-opacity", 0.6)
        .selectAll("rect") as d3.Selection<d3.BaseType, Data, SVGGElement, any>;

    return ([_, data]: [Date, Array<Data>], transition: Transition) => bar = bar
        .data(data.slice(0, n), d => d.name)
        .join(
            enter => enter.append("rect")
                .attr("fill", color)
                .attr("height", y.bandwidth())
                .attr("x", x(0))
                .attr("y", d => y((prev.get(d) || d).rank ?? 0) ?? 0)
                .attr("width", d => x((prev.get(d) || d).value) - x(0)),
            update => update,
            exit => exit.transition(transition).remove()
                .attr("y", d => y((next.get(d) || d).rank ?? 0) ?? 0)
                .attr("width", d => x((next.get(d) || d).value) - x(0))
        )
        .call(bar => bar.transition(transition)
            .attr("y", d => y(d.rank ?? 0) ?? 0)
            .attr("width", d => x(d.value) - x(0)));
}
function labels(svg: SVG) {
    let label = svg.append("g")
        .style("font", "bold 12px var(--sans-serif)")
        .style("font-variant-numeric", "tabular-nums")
        .attr("text-anchor", "end")
        .selectAll("text") as d3.Selection<d3.BaseType, Data, SVGGElement, any>;

    return ([_, data]: [Date, Array<Data>], transition: Transition) => {
        label = label
            .data(data.slice(0, n), d => d.name)
            .join(
                enter => enter.append("text")
                    .attr("transform", d => `translate(${x((prev.get(d) || d).value)},${y((prev.get(d) || d).rank ?? 0)})`)
                    .attr("y", y.bandwidth() / 2)
                    .attr("x", -6)
                    .attr("dy", "-0.25em")
                    .text(d => d.name)
                    .call(text => text.append("tspan")
                        .attr("fill-opacity", 0.7)
                        .attr("font-weight", "normal")
                        .attr("x", -6)
                        .attr("dy", "1.15em")),
                update => update,
                exit => exit.transition(transition).remove()
                    .attr("transform", d => `translate(${x((next.get(d) || d).value)},${y((next.get(d) || d).rank ?? 0)})`)
                    .call(g => g.select("tspan").tween("text", d => textTween(d.value, (next.get(d) || d).value)))
            )
            .call(bar => bar.transition(transition)
                .attr("transform", d => `translate(${x(d.value)},${y(d.rank ?? 0)})`)
                .call(g => g.select("tspan").tween("text", d => textTween((prev.get(d) || d).value, d.value))));
    }
}
function textTween(a: number, b: number) {
    const i = d3.interpolateNumber(a, b);
    return function (this: any, t: number) {
        this.textContent = formatNumber(i(t));
    };
}
function rank(value: (name: string) => number) {
    const data: Array<{
        name: string,
        value: number,
        rank?: number
    }> = Array.from(names, name => ({ name, value: value(name) }));
    data.sort((a, b) => d3.descending(a.value, b.value));
    for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
    return data;
}
async function main() {
    const svg: SVG = d3.select(".box")
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("width", width)
        .attr("height", height);

    const uBars = bars(svg);
    const uAxis = axis(svg);
    const uLabels = labels(svg);
    const uTicker = ticker(svg);

    // while (true) {
        for (const keyframe of keyframes) {
            const transition = svg.transition()
                .duration(250)
                .ease(d3.easeLinear);

            // Extract the top bar’s value.
            x.domain([0, keyframe[1][0].value]);

            uAxis(keyframe, transition);
            uBars(keyframe, transition);
            uLabels(keyframe, transition);
            uTicker(keyframe, transition);

            // invalidation.then(() => svg.interrupt());
            await transition.end();
        }
    // }
}

onMounted(() => {
    main();
});
</script>

<template>
    <div class="box">
        asd
    </div>
</template>
