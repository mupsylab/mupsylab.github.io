<script setup lang="ts">
import * as d3 from "d3";
import { onMounted } from "vue";

function l1() {
    const opts = {
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
    };
    const dataset = [50, 43, 120, 87, 99, 167, 142];
    const { padding, rectStep, rectWidth, width, height } = opts;
    const svg = d3.select(".box")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    const gBar = svg.append("g");
    const gText = svg.append("g");
    gBar.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("fill", "steelblue")
        .attr("x", (_, i) => padding.left + i * rectStep)
        .attr("y", (d) => height - padding.bottom - d)
        .attr("width", rectWidth)
        .attr("height", (d) => d);
    gText.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .attr("fill", "white")
        .attr("font-size", "14px")
        .attr("text-anchor", "middle")
        .attr("x", (_, i) => padding.left + i * rectStep)
        .attr("y", (d) => height - padding.bottom - d)
        .attr("dx", rectWidth / 2)
        .attr("dy", "1em")
        .text((d) => d);
    svg.append("g")
        .attr("transform", "translate(0, 382)")
        .call(d3.axisBottom(
            d3.scaleLinear()
                .domain([0, 20])
                .range([padding.left, width - padding.right])
        ));
    svg.on("click", function () {
        const update_dataset = [];
        for (let i = 0; i < 10; i++) {
            update_dataset.push(Math.floor(Math.random() * 200));
        }
        const updateRect = gBar.selectAll("rect").data(update_dataset);
        const updateText = gText.selectAll("text").data(update_dataset);

        updateRect
            .transition()
            .duration(1000)
            .ease(d3.easeBounce)
            .attr("x", function (_, i) {
                return padding.left + i * rectStep;
            })
            .attr("y", function (d, _) {
                return height - padding.bottom - d
            })
            .attr("width", rectWidth)
            .attr("height", function (d) {
                return d;
            });
        updateRect
            .enter()
            .append("rect")
            .attr("fill", "steelblue")
            .attr("x", function (_, i) {
                return padding.left + i * rectStep;
            })
            .attr("y", function (d, _) {
                return height - padding.bottom - d
            })
            .attr("width", rectWidth)
            .attr("height", function (d) {
                return d;
            });
        updateRect.exit().remove();

        updateText
            .transition()
            .duration(1000)
            .ease(d3.easeBounce)
            .attr("x", (_, i) => padding.left + i * rectStep)
            .attr("y", (d) => {
                return height - padding.bottom - d;
            })
            .text((d) => d);
        updateText
            .enter()
            .append("text")
            .attr("fill", "white")
            .attr("font-size", "14px")
            .attr("text-anchor", "middle")
            .attr("x", (_, i) => padding.left + i * rectStep)
            .attr("y", (d) => {
                return height - padding.bottom - d;
            })
            .attr("dx", rectWidth / 2)
            .attr("dy", "1em")
            .text((d) => d);
        updateText.exit().remove();
    });
}
function l2() {
    const width = 300;
    const height = 300;

    const svg = d3.select(".box")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    const xAxisWidth = 300,
        yAxisWidth = 300;
    const center = [
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

    const xScale = d3.scaleLinear()
        .domain([0, 1.2 * (d3.max(center, function (d) {
            return d[0];
        }) ?? 1)])
        .range([0, xAxisWidth]);
    const yScale = d3.scaleLinear()
        .domain([0, 1.2 * (d3.max(center, function (d) {
            return d[1];
        }) ?? 1)])
        .range([0, yAxisWidth]);
    svg.append("g")
        .call(d3.axisLeft(yScale));
    svg.append("g")
        .call(d3.axisBottom(xScale));
    const padding = { top: 30, right: 30, bottom: 30, left: 30 };
    svg.append("g").selectAll("circle")
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
}
function l3() {
    const dataset = [
        ["小米", 60.8], ["三星", 58.4], ["联想", 47.3],
        [" 苹果", 46.6], ["华为", 41.3], ["酷派", 40.1],
        [" 其他", 111.5]
    ];

    const width = 300;
    const height = 300;

    const outerRadius = width / 3;
    const innerRadius = 0;
    const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);
    const color = d3.schemeCategory10;


    const pie = d3.pie<(string | number)[]>()
        .startAngle(Math.PI * 0.2)
        .endAngle(Math.PI * 1.5)
        .value(function (d) { return (d as any)[1]; });
    const piedata = pie(dataset);

    const svg = d3.select(".box")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const arcs = svg.selectAll("g")
        .data(piedata)
        .enter()
        .append("g")
        .attr("transform",
            "translate(" + width / 2 + "," + height / 2 + ")");
    arcs.append("path")
        .attr("fill", (_, i) => color[i])
        .attr("d", d => arc(d as any));
    arcs.append("line")
        .attr("stroke", "grey")
        .attr("x1", function (d) { return arc.centroid(d as any)[0] * 2; })
        .attr("y1", function (d) { return arc.centroid(d as any)[1] * 2; })
        .attr("x2", function (d) { return arc.centroid(d as any)[0] * 2.2; })
        .attr("y2", function (d) { return arc.centroid(d as any)[1] * 2.2; });
    arcs.append("text")
        .attr("transform", d => `translate(${arc.centroid(d as any)[0] * 2.5}, ${arc.centroid(d as any)[1] * 2.5})`)
        .attr("text-anchor", "middle")
        .attr("fill", "grey")
        .text(d => d.data[0]);
    arcs.append("text")
        .attr("transform", d => `translate(${arc.centroid(d as any)[0] * 1.4}, ${arc.centroid(d as any)[1] * 1.4})`)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .text(function (d) {
            var percent = Number(d.value) / d3.sum(dataset, d => d[1] as number) * 100
            return percent.toFixed(1) + "%";
        });
}
function l4() {
    const nodes: Array<{
        name: string;
        x?: number | undefined;
        y?: number | undefined;
    }> = [
            { name: "0" },
            { name: "1" },
            { name: "2" },
            { name: "3" },
            { name: "4" },
            { name: "5" },
            { name: "6" },
        ];
    const edges = [
        { source: 0, target: 1 },
        { source: 0, target: 2 },
        { source: 0, target: 3 },
        { source: 1, target: 4 },
        { source: 1, target: 5 },
        { source: 1, target: 6 },
    ];

    const width = 400;
    const height = 300;
    const svg = d3.select(".box")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g");

    const force = d3.forceSimulation(nodes)
        .force("charge", d3.forceManyBody().strength(_ => -400))
        .force("link", d3.forceLink(edges).distance(_ => 90))
        .force("center", d3.forceCenter().x(200).y(150))

    const color = d3.schemeCategory10;
    var lines = svg.selectAll(".forceLine")
        .data(edges as any as {
            source: {
                x: number;
                y: number;
            };
            target: {
                x: number;
                y: number;
            };
        }[])
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
        .style("fill", (_, i) => color[i])

    var texts = svg.selectAll(".forceText")
        .data(nodes)
        .enter()
        .append("text")
        .attr("class", "forceText")
        .attr("x", d => d.x ?? 0)
        .attr("y", d => d.y ?? 0)
        .attr("dy", ".3em")
        .text(d => d.name)

    force.on("tick", () => {
        //更新连线的端点坐标 
        lines.attr("x1", function (d) { return d.source.x; });
        lines.attr("y1", function (d) { return d.source.y; });
        lines.attr("x2", function (d) { return d.target.x; });
        lines.attr("y2", function (d) { return d.target.y; });

        //更新节点坐标 
        circles.attr("cx", function (d) { return d.x ?? 0; });
        circles.attr("cy", function (d) { return d.y ?? 0; });

        //更新节点文字的坐标 
        texts.attr("x", function (d) { return d.x ?? 0; });
        texts.attr("y", function (d) { return d.y ?? 0; });
    });

    const drag = d3.drag<any, any>()
        .on("start", function(event, d) {
            if (!event.active) force.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        })
        .on("drag", function(event, d) {
            d.fx = event.x;
            d.fy = event.y;
            d3.select(this).style("fill", "yellow");
        })
        .on("end", function(event, d) {
            if (!event.active) force.alphaTarget(0);
            d.fx = null;
            d.fy = null;
            d3.select(this).style("fill", color[d.index]);
        });
    circles.call(drag)
}
function l5() {
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
    }); // 声明节点

    const tree = d3.tree<{
        name: string;
        children: ({
            name: string;
            children?: undefined;
        } | {
            name: string;
            children: {
                name: string;
            }[];
        })[];
    }>(); // 声明节点展现形式
    const width = 400, height = 300;
    const svg = d3.select(".box")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(100, 100)");
    const descendants = root.descendants();
    const label = (d: { name: string }) => d.name;
    const L = descendants.map(d => label(d.data));

    tree.size([400, 300])
    tree.nodeSize([20, 300 / (root.height + 2)])(root)

    svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "white")
        .selectAll("path")
        .data(root.links())
        .join("path")
        .attr("d", d3.link<any, any, any>(d3.curveBumpX).x((d) => d.y).y((d) => d.x));

    const node = svg.append("g")
        .selectAll("a")
        .data(root.descendants())
        .join("a")
        .attr("transform", d => `translate(${d.y}, ${d.x})`);

    node.append("circle")
        .attr("fill", d => d.children ? "white" : "yellow")
        .attr("r", 3)

    node.append("text")
        .attr("fill", "grey")
        .attr("dy", "0.32em")
        .attr("x", d => d.children ? -6 : 6)
        .attr("text-anchor", d => d.children ? "end" : "start")
        .attr("paint-order", "stroke")
        .text((_, i) => L[i])
}
function l6() {
    // const continent = ["亚洲", "欧洲", "非洲"];
    const population = [
        [9000, 870, 3000],
        [3400, 8000, 2300],
        [2000, 2000, 7700]
    ];

    const width = 400, height = 300;
    const svg = d3.select(".box")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const chord = d3.chord()
        .padAngle(0.03)
        .sortSubgroups(d3.ascending)(population);
    const gOuter = svg.append("g"),
        gInner = svg.append("g");
    const color = d3.schemeCategory10;
    const innerRadius = width / 2 * 0.6,
        outerRadius = innerRadius * 1.1;

    const arcOuter = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

    gOuter.selectAll(".outerPath")
        .data(chord.groups)
        .enter()
        .append("path")
        .attr("class", "outerPath")
        .style("fill", d => color[d.index])
        .attr("d", arcOuter as any);
    const ribbon = d3.ribbon()
        .radius(innerRadius);
    gInner.selectAll(".innerPath")
        .data(chord)
        .enter()
        .append("path")
        .attr("class", "innerPath")
        .attr("d", d => ribbon(d as any) as any)
        .style("fill", d => color[d.target.index])
        .style("stroke", "black");

    function fade(opacify: number) {
        return function (_: any, g: any) {
            const r = gInner.selectAll(".innerPath")
                .filter((d: any) => {
                    return d.source.index != g.index && d.target.index != g.index;
                });
            r.transition()
             .style("opacity", opacify);
        }
    }
    gOuter.selectAll("path")
        .on("mouseover", fade(0.0))
        .on("mouseout", fade(1.0));
}
function l7() {
    const root = d3.hierarchy({
        "name": "flare",
        "children": [
            {
                "name": "analytics",
                "children": [
                    {
                        "name": "cluster",
                        "children": [
                            { "name": "AgglomerativeCluster", "size": 3938 },
                            { "name": "CommunityStructure", "size": 3812 },
                            { "name": "HierarchicalCluster", "size": 6714 },
                            { "name": "MergeEdge", "size": 743 }
                        ]
                    },
                    {
                        "name": "graph",
                        "children": [
                            { "name": "BetweennessCentrality", "size": 3534 },
                            { "name": "LinkDistance", "size": 5731 },
                            { "name": "MaxFlowMinCut", "size": 7840 },
                            { "name": "ShortestPaths", "size": 5914 },
                            { "name": "SpanningTree", "size": 3416 }
                        ]
                    },
                    {
                        "name": "optimization",
                        "children": [
                            { "name": "AspectRatioBanker", "size": 7074 }
                        ]
                    }
                ]
            },
            {
                "name": "animate",
                "children": [
                    { "name": "Easing", "size": 17010 },
                    { "name": "FunctionSequence", "size": 5842 },
                    {
                        "name": "interpolate",
                        "children": [
                            { "name": "ArrayInterpolator", "size": 1983 },
                            { "name": "ColorInterpolator", "size": 2047 },
                            { "name": "DateInterpolator", "size": 1375 },
                            { "name": "Interpolator", "size": 8746 },
                            { "name": "MatrixInterpolator", "size": 2202 },
                            { "name": "NumberInterpolator", "size": 1382 },
                            { "name": "ObjectInterpolator", "size": 1629 },
                            { "name": "PointInterpolator", "size": 1675 },
                            { "name": "RectangleInterpolator", "size": 2042 }
                        ]
                    },
                    { "name": "ISchedulable", "size": 1041 },
                    { "name": "Parallel", "size": 5176 },
                    { "name": "Pause", "size": 449 },
                    { "name": "Scheduler", "size": 5593 },
                    { "name": "Sequence", "size": 5534 },
                    { "name": "Transition", "size": 9201 },
                    { "name": "Transitioner", "size": 19975 },
                    { "name": "TransitionEvent", "size": 1116 },
                    { "name": "Tween", "size": 6006 }
                ]
            },
            {
                "name": "data",
                "children": [
                    {
                        "name": "converters",
                        "children": [
                            { "name": "Converters", "size": 721 },
                            { "name": "DelimitedTextConverter", "size": 4294 },
                            { "name": "GraphMLConverter", "size": 9800 },
                            { "name": "IDataConverter", "size": 1314 },
                            { "name": "JSONConverter", "size": 2220 }
                        ]
                    },
                    { "name": "DataField", "size": 1759 },
                    { "name": "DataSchema", "size": 2165 },
                    { "name": "DataSet", "size": 586 },
                    { "name": "DataSource", "size": 3331 },
                    { "name": "DataTable", "size": 772 },
                    { "name": "DataUtil", "size": 3322 }
                ]
            },
            {
                "name": "display",
                "children": [
                    { "name": "DirtySprite", "size": 8833 },
                    { "name": "LineSprite", "size": 1732 },
                    { "name": "RectSprite", "size": 3623 },
                    { "name": "TextSprite", "size": 10066 }
                ]
            },
            {
                "name": "flex",
                "children": [
                    { "name": "FlareVis", "size": 4116 }
                ]
            },
            {
                "name": "physics",
                "children": [
                    { "name": "DragForce", "size": 1082 },
                    { "name": "GravityForce", "size": 1336 },
                    { "name": "IForce", "size": 319 },
                    { "name": "NBodyForce", "size": 10498 },
                    { "name": "Particle", "size": 2822 },
                    { "name": "Simulation", "size": 9983 },
                    { "name": "Spring", "size": 2213 },
                    { "name": "SpringForce", "size": 1681 }
                ]
            },
            {
                "name": "query",
                "children": [
                    { "name": "AggregateExpression", "size": 1616 },
                    { "name": "And", "size": 1027 },
                    { "name": "Arithmetic", "size": 3891 },
                    { "name": "Average", "size": 891 },
                    { "name": "BinaryExpression", "size": 2893 },
                    { "name": "Comparison", "size": 5103 },
                    { "name": "CompositeExpression", "size": 3677 },
                    { "name": "Count", "size": 781 },
                    { "name": "DateUtil", "size": 4141 },
                    { "name": "Distinct", "size": 933 },
                    { "name": "Expression", "size": 5130 },
                    { "name": "ExpressionIterator", "size": 3617 },
                    { "name": "Fn", "size": 3240 },
                    { "name": "If", "size": 2732 },
                    { "name": "IsA", "size": 2039 },
                    { "name": "Literal", "size": 1214 },
                    { "name": "Match", "size": 3748 },
                    { "name": "Maximum", "size": 843 },
                    {
                        "name": "methods",
                        "children": [
                            { "name": "add", "size": 593 },
                            { "name": "and", "size": 330 },
                            { "name": "average", "size": 287 },
                            { "name": "count", "size": 277 },
                            { "name": "distinct", "size": 292 },
                            { "name": "div", "size": 595 },
                            { "name": "eq", "size": 594 },
                            { "name": "fn", "size": 460 },
                            { "name": "gt", "size": 603 },
                            { "name": "gte", "size": 625 },
                            { "name": "iff", "size": 748 },
                            { "name": "isa", "size": 461 },
                            { "name": "lt", "size": 597 },
                            { "name": "lte", "size": 619 },
                            { "name": "max", "size": 283 },
                            { "name": "min", "size": 283 },
                            { "name": "mod", "size": 591 },
                            { "name": "mul", "size": 603 },
                            { "name": "neq", "size": 599 },
                            { "name": "not", "size": 386 },
                            { "name": "or", "size": 323 },
                            { "name": "orderby", "size": 307 },
                            { "name": "range", "size": 772 },
                            { "name": "select", "size": 296 },
                            { "name": "stddev", "size": 363 },
                            { "name": "sub", "size": 600 },
                            { "name": "sum", "size": 280 },
                            { "name": "update", "size": 307 },
                            { "name": "variance", "size": 335 },
                            { "name": "where", "size": 299 },
                            { "name": "xor", "size": 354 },
                            { "name": "_", "size": 264 }
                        ]
                    },
                    { "name": "Minimum", "size": 843 },
                    { "name": "Not", "size": 1554 },
                    { "name": "Or", "size": 970 },
                    { "name": "Query", "size": 13896 },
                    { "name": "Range", "size": 1594 },
                    { "name": "StringUtil", "size": 4130 },
                    { "name": "Sum", "size": 791 },
                    { "name": "Variable", "size": 1124 },
                    { "name": "Variance", "size": 1876 },
                    { "name": "Xor", "size": 1101 }
                ]
            },
            {
                "name": "scale",
                "children": [
                    { "name": "IScaleMap", "size": 2105 },
                    { "name": "LinearScale", "size": 1316 },
                    { "name": "LogScale", "size": 3151 },
                    { "name": "OrdinalScale", "size": 3770 },
                    { "name": "QuantileScale", "size": 2435 },
                    { "name": "QuantitativeScale", "size": 4839 },
                    { "name": "RootScale", "size": 1756 },
                    { "name": "Scale", "size": 4268 },
                    { "name": "ScaleType", "size": 1821 },
                    { "name": "TimeScale", "size": 5833 }
                ]
            },
            {
                "name": "util",
                "children": [
                    { "name": "Arrays", "size": 8258 },
                    { "name": "Colors", "size": 10001 },
                    { "name": "Dates", "size": 8217 },
                    { "name": "Displays", "size": 12555 },
                    { "name": "Filter", "size": 2324 },
                    { "name": "Geometry", "size": 10993 },
                    {
                        "name": "heap",
                        "children": [
                            { "name": "FibonacciHeap", "size": 9354 },
                            { "name": "HeapNode", "size": 1233 }
                        ]
                    },
                    { "name": "IEvaluable", "size": 335 },
                    { "name": "IPredicate", "size": 383 },
                    { "name": "IValueProxy", "size": 874 },
                    {
                        "name": "math",
                        "children": [
                            { "name": "DenseMatrix", "size": 3165 },
                            { "name": "IMatrix", "size": 2815 },
                            { "name": "SparseMatrix", "size": 3366 }
                        ]
                    },
                    { "name": "Maths", "size": 17705 },
                    { "name": "Orientation", "size": 1486 },
                    {
                        "name": "palette",
                        "children": [
                            { "name": "ColorPalette", "size": 6367 },
                            { "name": "Palette", "size": 1229 },
                            { "name": "ShapePalette", "size": 2059 },
                            { "name": "SizePalette", "size": 2291 }
                        ]
                    },
                    { "name": "Property", "size": 5559 },
                    { "name": "Shapes", "size": 19118 },
                    { "name": "Sort", "size": 6887 },
                    { "name": "Stats", "size": 6557 },
                    { "name": "Strings", "size": 22026 }
                ]
            },
            {
                "name": "vis",
                "children": [
                    {
                        "name": "axis",
                        "children": [
                            { "name": "Axes", "size": 1302 },
                            { "name": "Axis", "size": 24593 },
                            { "name": "AxisGridLine", "size": 652 },
                            { "name": "AxisLabel", "size": 636 },
                            { "name": "CartesianAxes", "size": 6703 }
                        ]
                    },
                    {
                        "name": "controls",
                        "children": [
                            { "name": "AnchorControl", "size": 2138 },
                            { "name": "ClickControl", "size": 3824 },
                            { "name": "Control", "size": 1353 },
                            { "name": "ControlList", "size": 4665 },
                            { "name": "DragControl", "size": 2649 },
                            { "name": "ExpandControl", "size": 2832 },
                            { "name": "HoverControl", "size": 4896 },
                            { "name": "IControl", "size": 763 },
                            { "name": "PanZoomControl", "size": 5222 },
                            { "name": "SelectionControl", "size": 7862 },
                            { "name": "TooltipControl", "size": 8435 }
                        ]
                    },
                    {
                        "name": "data",
                        "children": [
                            { "name": "Data", "size": 20544 },
                            { "name": "DataList", "size": 19788 },
                            { "name": "DataSprite", "size": 10349 },
                            { "name": "EdgeSprite", "size": 3301 },
                            { "name": "NodeSprite", "size": 19382 },
                            {
                                "name": "render",
                                "children": [
                                    { "name": "ArrowType", "size": 698 },
                                    { "name": "EdgeRenderer", "size": 5569 },
                                    { "name": "IRenderer", "size": 353 },
                                    { "name": "ShapeRenderer", "size": 2247 }
                                ]
                            },
                            { "name": "ScaleBinding", "size": 11275 },
                            { "name": "Tree", "size": 7147 },
                            { "name": "TreeBuilder", "size": 9930 }
                        ]
                    },
                    {
                        "name": "events",
                        "children": [
                            { "name": "DataEvent", "size": 2313 },
                            { "name": "SelectionEvent", "size": 1880 },
                            { "name": "TooltipEvent", "size": 1701 },
                            { "name": "VisualizationEvent", "size": 1117 }
                        ]
                    },
                    {
                        "name": "legend",
                        "children": [
                            { "name": "Legend", "size": 20859 },
                            { "name": "LegendItem", "size": 4614 },
                            { "name": "LegendRange", "size": 10530 }
                        ]
                    },
                    {
                        "name": "operator",
                        "children": [
                            {
                                "name": "distortion",
                                "children": [
                                    { "name": "BifocalDistortion", "size": 4461 },
                                    { "name": "Distortion", "size": 6314 },
                                    { "name": "FisheyeDistortion", "size": 3444 }
                                ]
                            },
                            {
                                "name": "encoder",
                                "children": [
                                    { "name": "ColorEncoder", "size": 3179 },
                                    { "name": "Encoder", "size": 4060 },
                                    { "name": "PropertyEncoder", "size": 4138 },
                                    { "name": "ShapeEncoder", "size": 1690 },
                                    { "name": "SizeEncoder", "size": 1830 }
                                ]
                            },
                            {
                                "name": "filter",
                                "children": [
                                    { "name": "FisheyeTreeFilter", "size": 5219 },
                                    { "name": "GraphDistanceFilter", "size": 3165 },
                                    { "name": "VisibilityFilter", "size": 3509 }
                                ]
                            },
                            { "name": "IOperator", "size": 1286 },
                            {
                                "name": "label",
                                "children": [
                                    { "name": "Labeler", "size": 9956 },
                                    { "name": "RadialLabeler", "size": 3899 },
                                    { "name": "StackedAreaLabeler", "size": 3202 }
                                ]
                            },
                            {
                                "name": "layout",
                                "children": [
                                    { "name": "AxisLayout", "size": 6725 },
                                    { "name": "BundledEdgeRouter", "size": 3727 },
                                    { "name": "CircleLayout", "size": 9317 },
                                    { "name": "CirclePackingLayout", "size": 12003 },
                                    { "name": "DendrogramLayout", "size": 4853 },
                                    { "name": "ForceDirectedLayout", "size": 8411 },
                                    { "name": "IcicleTreeLayout", "size": 4864 },
                                    { "name": "IndentedTreeLayout", "size": 3174 },
                                    { "name": "Layout", "size": 7881 },
                                    { "name": "NodeLinkTreeLayout", "size": 12870 },
                                    { "name": "PieLayout", "size": 2728 },
                                    { "name": "RadialTreeLayout", "size": 12348 },
                                    { "name": "RandomLayout", "size": 870 },
                                    { "name": "StackedAreaLayout", "size": 9121 },
                                    { "name": "TreeMapLayout", "size": 9191 }
                                ]
                            },
                            { "name": "Operator", "size": 2490 },
                            { "name": "OperatorList", "size": 5248 },
                            { "name": "OperatorSequence", "size": 4190 },
                            { "name": "OperatorSwitch", "size": 2581 },
                            { "name": "SortOperator", "size": 2023 }
                        ]
                    },
                    { "name": "Visualization", "size": 16540 }
                ]
            }
        ]
    });

    const width = 400, height = 600;
    const svg = d3.select(".box")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g");

    const descendants = root.descendants();
    const leaves = descendants.filter(d => !d.children);
    leaves.forEach((v, i) => (v as any).index = i);

    // const L = leaves.map(d => d.data.name);
    // const T = descendants.map(d => d.value);

    d3.pack()
        .size([width, height])
        .padding(3)
        .radius(d => (d.data as any).size / 10000)(root as any);

    svg.selectAll("circle")
        .data(descendants)
        .enter()
        .append("circle")
        .attr("fill", d => d.children ? "#fff" : "yellow")
        .attr("fill-opacity", d => d.children ? null : 0.2)
        .attr("stroke", d => d.children ? "black" : null)
        .attr("stroke-width", d => d.children ? 1 : null)
        .attr("stroke-opacity", d => d.children ? 0.5 : null)
        .attr("class", d => d.children ? "node" : "leafnode")
        .attr("cx", d => d.x ?? 0)
        .attr("cy", d => d.y ?? 0)
        .attr("r", d => (d as any).r ?? 0);
}
function l8() {
    const width = 400, height = 300;
    const svg = d3.select(".box").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g");

    const rand = d3.randomNormal(170, 20);
    const dataset = [];
    for (let i = 0; i < 1000; i++) {
        dataset.push(rand());
    }

    const bin = d3.bin();
    const buckets = bin(dataset);

    const x = d3.scaleLinear()
        .domain([90, 260])
        .range([30, width - 30])
        .clamp(false);
    const y = d3.scaleLinear()
        .domain([0, d3.max(buckets, d => d.length) ?? 0])
        .range([height - 30, 30]);
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    svg.append("g")
        .attr("transform", `translate(0, ${height - 30})`)
        .call(xAxis);
    svg.append("g")
        .attr("transform", `translate(30, 0)`)
        .call(yAxis);

    const colors = ["black"]
        .concat(d3.schemeCategory10)
        .concat(d3.schemePaired)
        .concat(d3.schemePastel1)
        .concat(d3.schemePastel2)
    const binColor = d3.scaleThreshold()
        .domain(buckets.map(d => d.x0 as any))
        .range(colors as any);

    svg.selectAll("rect")
        .data(buckets)
        .enter()
        .append("rect")
        .attr("x", d => x(d.x0 ?? 0))
        .attr("y", d => y(d.length))
        .attr("width", d => x(d.x1 ?? 0) - x(d.x0 ?? 0) - 1)
        .attr("height", d => height - 30 - y(d.length))
        .attr("fill", d => binColor(d.x0 ?? 0));
}
function l9() {
    class Circle {
        x: number;
        y: number;
        r: number;
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
            this.r = 0;
        }
    }
    const circles: Array<Circle> = [];
    const width = 400, height = 300;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.addEventListener("mousemove", (e) => {
        const { offsetX: x, offsetY: y } = e;
        circles.push(new Circle(x, y));
    });
    document.querySelector(".box")?.appendChild(canvas);

    function draw() {
        const ctx = canvas.getContext("2d");
        if (ctx === null) return;
        ctx.clearRect(0, 0, width, height);
        circles.forEach((circle, i) => {
            circle.r += 0.5;
            if (circle.r > 100) {
                circles.splice(i, 1);
            }
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
            ctx.strokeStyle = "grey";
            ctx.stroke();
        });
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
}
onMounted(() => {
    l9();
    l8();
    l7();
    l6();
    l5();
    l4();
    l3();
    l2();
    l1();
});
</script>

<template>
    <div class="box">

    </div>
</template>

<style scoped>
.box {
    grid-column: 1 / 13;
}
</style>