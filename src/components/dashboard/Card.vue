<template>
  <div class="bg-white dark:bg-gray-700 rounded-lg shadow p-6">
    <h2 class="text-lg font-bold text-gray-800 dark:text-white mb-2">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>