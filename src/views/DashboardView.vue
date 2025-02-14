<template>
  <div class="bg-gray-100 dark:bg-gray-800 min-h-screen">
    <!-- <Navigation /> -->
    <Container>
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Finance Dashboard</h1>
          <div class="flex space-x-4">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Reports</button>
            <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Settings</button>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Export</button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Previous Statement">
            <p class="text-gray-600 dark:text-gray-400">Card Limit: $34,500.00</p>
            <p class="text-gray-600 dark:text-gray-400">Spent: $27,221.21</p>
            <p class="text-gray-600 dark:text-gray-400">Minimum: $7,331.94</p>
          </Card>
          <Card title="Account Balance">
            <p class="text-2xl font-bold text-gray-800 dark:text-white">38.33%</p>
            <p class="text-gray-600 dark:text-gray-400">Average Monthly Growth</p>
            <p class="text-2xl font-bold text-gray-800 dark:text-white">$45,332.00</p>
            <p class="text-gray-600 dark:text-gray-400">Average Monthly Income</p>
          </Card>
          <Card title="Current Statement">
            <p class="text-gray-600 dark:text-gray-400">Card Limit: $34,500.00</p>
            <p class="text-gray-600 dark:text-gray-400">Spent: $39,819.41</p>
            <p class="text-gray-600 dark:text-gray-400">Minimum: $9,112.51</p>
          </Card>
          <TransactionList />
          <BudgetSummary />
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
