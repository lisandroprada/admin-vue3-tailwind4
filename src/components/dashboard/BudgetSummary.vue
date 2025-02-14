<template>
  <Card title="Budget Summary">
    <div class="mb-4">
      <p class="text-gray-600 dark:text-gray-400">Last month, you had 223 expense transactions, 12 savings entries and 4 bills.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <p class="text-gray-600 dark:text-gray-400">Expenses</p>
        <p class="text-2xl font-bold text-gray-800 dark:text-white">$11,763.34</p>
        <p class="text-gray-600 dark:text-gray-400">2.6%</p>
      </div>
      <div>
        <p class="text-gray-600 dark:text-gray-400">Savings</p>
        <p class="text-2xl font-bold text-gray-800 dark:text-white">$10,974.12</p>
        <p class="text-gray-600 dark:text-gray-400">12.7%</p>
      </div>
      <div>
        <p class="text-gray-600 dark:text-gray-400">Bills</p>
        <p class="text-2xl font-bold text-gray-800 dark:text-white">$1,789.22</p>
        <p class="text-gray-600 dark:text-gray-400">105.7%</p>
      </div>
    </div>
    <div class="mt-4">
      <p class="text-gray-600 dark:text-gray-400">Exceeded your personal spending the corsha next month.</p>
    </div>
  </Card>
</template>

<script>
import Card from './Card.vue';

export default {
  components: {
    Card
  }
}
</script>