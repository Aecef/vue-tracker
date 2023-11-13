<script setup>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
//import * as chartConfig from './chartConfig.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
const options = {
  scales: {
    y: {
      ticks: {
        color: "#b6baca",
      },
      grid: {
        drawTicks: false,
      },
      border: {
        dash: [5, 10],
      },
    },
    x: {
      ticks: {
        color: "#b6baca",
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
}

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data One',
        data: [40, 39, 10, 40, 39, 80, 40],
        tension: 0.4,
        borderColor: 'white',
      }
    ]
}
</script>

<template>
  <Line :data="data" :options="options" />
</template>