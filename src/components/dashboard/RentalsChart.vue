<template>
  <div class="bg-white dark:bg-[#1C2A3F] rounded-lg shadow p-4">
    <h3 class="text-lg font-medium text-gray-900 dark:text-gray-200 mb-4">Rentals Chart</h3>
    <canvas id="rentalsChart"></canvas>
  </div>
</template>

<script setup>
import {onMounted} from 'vue';
import {Chart, registerables} from 'chart.js';

Chart.register(...registerables);

const renderChart = () => {
  const ctx = document.getElementById('rentalsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Rentals',
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: 'rgba(153, 102, 255, 1)',
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
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
