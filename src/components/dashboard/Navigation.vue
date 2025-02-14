<template>
  <div class="fixed left-0 top-0 h-full w-64 bg-gray-200 dark:bg-gray-900 p-4">
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white">Your App</h2>
    </div>
    <ul>
      <li class="mb-4">
        <a href="#" class="flex items-center text-gray-800 dark:text-white hover:text-blue-500">
          <Icon name="view-grid" class="h-6 w-6 mr-2" />
          Dashboards
        </a>
      </li>
      <li class="mb-4">
        <a href="#" class="flex items-center text-gray-800 dark:text-white hover:text-blue-500">
          <Icon name="collection" class="h-6 w-6 mr-2" />
          Apps
        </a>
      </li>
      <li class="mb-4">
        <a href="#" class="flex items-center text-gray-800 dark:text-white hover:text-blue-500">
          <Icon name="document-duplicate" class="h-6 w-6 mr-2" />
          Pages
        </a>
      </li>
      <li class="mb-4">
        <a href="#" class="flex items-center text-gray-800 dark:text-white hover:text-blue-500">
          <Icon name="chart-bar" class="h-6 w-6 mr-2" />
          Elements
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
  components: {
    Icon
  }
}
</script>