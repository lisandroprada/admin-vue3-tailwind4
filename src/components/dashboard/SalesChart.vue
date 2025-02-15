<template>
  <div class="bg-white dark:bg-[#1C2A3F] rounded-lg shadow p-4">
    <h3 class="text-lg font-medium text-gray-900 dark:text-gray-200 mb-4">Sales Chart</h3>
    <canvas id="salesChart"></canvas>
  </div>
</template>

<script setup>
import {onMounted} from 'vue';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

const renderChart = () => {
  const ctx = document.getElementById('salesChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: true,
            color: 'rgba(200, 200, 200, 0.2)',
          },
        },
      },
    },
  });
};

onMounted(() => {
  renderChart();
});
</script>
