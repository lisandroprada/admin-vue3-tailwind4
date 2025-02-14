<template>
  <Card title="Recent Transactions">
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="text-left text-gray-600 dark:text-gray-400">Transaction ID</th>
          <th class="text-left text-gray-600 dark:text-gray-400">Date</th>
          <th class="text-left text-gray-600 dark:text-gray-400">Name</th>
          <th class="text-left text-gray-600 dark:text-gray-400">Amount</th>
          <th class="text-left text-gray-600 dark:text-gray-400">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction.id">
          <td class="text-gray-800 dark:text-white">{{ transaction.id }}</td>
          <td class="text-gray-800 dark:text-white">{{ transaction.date }}</td>
          <td class="text-gray-800 dark:text-white">{{ transaction.name }}</td>
          <td class="text-gray-800 dark:text-white">{{ transaction.amount }}</td>
          <td class="text-gray-800 dark:text-white">{{ transaction.status }}</td>
        </tr>
      </tbody>
    </table>
  </Card>
</template>

<script>
import Card from './Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      transactions: [
        { id: '525653571NT', date: 'Oct 07, 2019', name: 'Morgan Page', amount: '$1,358.75', status: 'Completed' },
        { id: '421436904YT', date: 'Dec 18, 2019', name: 'Nita Hebert', amount: '-$1,042.82', status: 'Completed' },
        { id: '654879213GH', date: 'Dec 25, 2019', name: 'Marsha Chambers', amount: '$1,828.16', status: 'Pending' },
        { id: '987654321IJ', date: 'Nov 29, 2019', name: 'Charmaine Jackson', amount: '$1,647.55', status: 'Completed' }
      ]
    }
  }
}
</script>