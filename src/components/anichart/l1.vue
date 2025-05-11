<script setup lang="ts">
import { onMounted } from "vue";

import * as ani from "@/utils/anichart";
import data from "@/assets/data/test.csv?url";

onMounted(() => {
  const stage = new ani.Stage(document.querySelector("#canvas") as HTMLCanvasElement);
  stage.options.fps = 30;
  stage.options.sec = 15;
  stage.output = true;

  const barChart = new ani.BarChart({
    aniTime: [4, 60],
    dataName: 'data',
    idField: 'id',
    showXAxis: true,
    margin: { top: 100, left: 10, right: 10, bottom: 10 },
    valueField: 'value',
    dateField: "date",
    barInfoOptions: {
      fontSize: 16
    },
    dateLabelOptions: {
      fontSize: 32
    }
  })

  stage.resource.loadCSV(data, "data");
  stage.addChild(barChart);
  stage.play();
})
</script>

<template>
  <div class="box">
    <canvas id="canvas" width="480" height="450"></canvas>
  </div>
</template>

<style scoped>
.box {
  height: 0;
  grid-column: 1 / 13;
}
</style>
