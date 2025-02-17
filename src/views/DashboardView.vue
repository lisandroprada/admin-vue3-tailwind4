<template>
  <div class="bg-white dark:bg-gray-800 min-h-screen">
    <Container>
      <div class="p-6">
        <!-- Header Section with App Selector -->
        <div class="flex justify-between items-center mb-8">
          <div class="flex items-center space-x-4">
            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
            <div class="relative">
              <select class="appearance-none bg-gray-50 border border-gray-200 text-gray-600 py-2 px-4 pr-8 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option>Finance App</option>
                <option>Analytics App</option>
                <option>Marketing App</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex space-x-3">
            <button class="inline-flex items-center px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium rounded-lg">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Reports
            </button>
            <button class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              New Export
            </button>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card class="bg-white dark:bg-gray-900 rounded-xl shadow-sm">
            <template #title>
              <div class="flex items-center">
                <div class="w-2 h-2 rounded-full bg-stats-blue mr-2"></div>
                <h3 class="font-medium text-gray-600">Previous Statement</h3>
              </div>
            </template>
            <div class="mt-4">
              <p class="text-2xl font-semibold text-gray-800 dark:text-white">$34,500.00</p>
              <p class="text-sm text-gray-600 mt-1">Card Limit</p>
              <div class="mt-4 space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Spent</span>
                  <span class="font-medium text-gray-800">$27,221.21</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Minimum</span>
                  <span class="font-medium text-gray-800">$7,331.94</span>
                </div>
              </div>
            </div>
          </Card>

          <Card class="bg-white dark:bg-gray-900 rounded-xl shadow-sm">
            <template #title>
              <div class="flex items-center">
                <div class="w-2 h-2 rounded-full bg-stats-green mr-2"></div>
                <h3 class="font-medium text-gray-600">Account Balance</h3>
              </div>
            </template>
            <div class="mt-4">
              <p class="text-2xl font-semibold text-gray-800 dark:text-white">38.33%</p>
              <p class="text-sm text-gray-600 mt-1">Average Monthly Growth</p>
              <div class="mt-4">
                <p class="text-2xl font-semibold text-gray-800 dark:text-white">$45,332.00</p>
                <p class="text-sm text-gray-600 mt-1">Average Monthly Income</p>
              </div>
            </div>
          </Card>

          <Card class="bg-white dark:bg-gray-900 rounded-xl shadow-sm">
            <template #title>
              <div class="flex items-center">
                <div class="w-2 h-2 rounded-full bg-stats-orange mr-2"></div>
                <h3 class="font-medium text-gray-600">Current Statement</h3>
              </div>
            </template>
            <div class="mt-4">
              <p class="text-2xl font-semibold text-gray-800 dark:text-white">$34,500.00</p>
              <p class="text-sm text-gray-600 mt-1">Card Limit</p>
              <div class="mt-4 space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Spent</span>
                  <span class="font-medium text-gray-800">$39,819.41</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Minimum</span>
                  <span class="font-medium text-gray-800">$9,112.51</span>
                </div>
              </div>
            </div>
          </Card>

          <Card class="bg-white dark:bg-gray-900 rounded-xl shadow-sm">
            <template #title>
              <div class="flex items-center">
                <div class="w-2 h-2 rounded-full bg-stats-red mr-2"></div>
                <h3 class="font-medium text-gray-600">Monthly Overview</h3>
              </div>
            </template>
            <div class="mt-4">
              <p class="text-2xl font-semibold text-gray-800 dark:text-white">$124,500.00</p>
              <p class="text-sm text-gray-600 mt-1">Total Revenue</p>
              <div class="mt-4 space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Expenses</span>
                  <span class="font-medium text-gray-800">$86,219.41</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Profit</span>
                  <span class="font-medium text-text-stats-green">$38,280.59</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <!-- Additional Components -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TransactionList class="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6" />
          <BudgetSummary class="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6" />
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Card from '../components/dashboard/Card.vue';
import TransactionList from '../components/dashboard/TransactionList.vue';
import BudgetSummary from '../components/dashboard/BudgetSummary.vue';
import Container from '../components/layout/Container.vue';

export default {
  components: {
    Card,
    TransactionList,
    BudgetSummary,
    Container,
  },
};
</script>

<style>
/* Stats indicator colors */
.bg-stats-blue {
  background-color: #2563eb;
}
.bg-stats-red {
  background-color: #dc2626;
}
.bg-stats-orange {
  background-color: #ea580c;
}
.bg-stats-green {
  background-color: #16a34a;
}
.text-stats-green {
  color: #16a34a;
}
</style>
