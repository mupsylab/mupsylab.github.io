<script setup lang="ts">
import { onMounted } from "vue";

import * as ani from "@/utils/anichart";
import data from "@/assets/data/test.csv?url";

onMounted(() => {
  const dom = document.querySelector("#canvas") as HTMLCanvasElement;
  const stage = new ani.Stage(dom);
  stage.options.fps = 30;
  stage.options.sec = 30;
  stage.output = false;

  const barChart = new ani.BarChart({
    dataName: 'data',
    idField: 'id',
    valueField: 'value',
    dateField: "date",
    aniTime: [0, 30],
    margin: { top: 100, left: 10, right: 10, bottom: 10 },
    barInfoOptions: {
      fontSize: 16
    },
    dateLabelOptions: {
      fontSize: 32
    }
  })

  const pieChart = new ani.PieChart({
    dataName: 'data',
    idField: 'id',
    valueField: 'value',
    dateField: "date",
    position: {
      x: 330,
      y: 400
    },
    radius: [100, 120],
    aniTime: [0, 30],
    labelTextStyle: {
      key: 'label-text-style',
      font: 'Sarasa Mono SC',
      lineWidth: 6,
      fontSize: 16,
      fontWeight: 'bolder',
      strokeStyle: '#1e1e1e',
    }
  })

  stage.resource.loadCSV(data, "data");
  stage.addChild(barChart);
  stage.addChild(pieChart);
  stage.play().then(() => {
    const record = new ani.Recorder();
    record.record(dom, 3000)
      .then(r => {
        console.log(r);
      });
  });
})
</script>

<template>
  <div class="box">
    <canvas id="canvas" width="480" height="600"></canvas>
  </div>
</template>

<style scoped>
.box {
  height: 0;
  grid-column: 1 / 13;
}
</style>
