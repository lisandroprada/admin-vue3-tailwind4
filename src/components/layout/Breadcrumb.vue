<template>
  <nav class="text-gray-500 dark:text-gray-400 text-sm mb-4">
    <ol class="list-reset flex">
      <li class="flex items-center">
        <router-link to="/" class="hover:text-gray-700 dark:hover:text-gray-200 flex items-center">
          <HomeIcon class="w-4 h-4 mr-1" />
          Home
        </router-link>
        <span v-if="breadcrumbs.length" class="mx-2">/</span>
      </li>
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <router-link v-if="crumb.link" :to="crumb.link" class="hover:text-gray-700 dark:hover:text-gray-200 flex items-center">
          <component :is="crumb.icon" class="w-4 h-4 mr-1" />
          {{ crumb.text }}
        </router-link>
        <span v-else class="flex items-center">
          <component :is="crumb.icon" class="w-4 h-4 mr-1" />
          {{ crumb.text }}
        </span>
        <span v-if="index < breadcrumbs.length - 1" class="mx-2">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import {computed, defineAsyncComponent} from 'vue';
import {useRoute} from 'vue-router';
import {HomeIcon, UserCircleIcon, ChartBarIcon, DocumentIcon, Cog6ToothIcon} from '@heroicons/vue/24/outline';

const route = useRoute();

const iconMap = {
  home: HomeIcon,
  profile: UserCircleIcon,
  analytics: ChartBarIcon,
  reports: DocumentIcon,
  settings: Cog6ToothIcon,
  applications: HomeIcon, // Replace with appropriate icon if needed
  folder: defineAsyncComponent(() => import('@heroicons/vue/24/outline/FolderIcon')),
  // Add more mappings as needed
};

const breadcrumbs = computed(() => {
  const paths = route.path.split('/').filter((p) => p);
  return paths.map((path, index) => ({
    text: path.charAt(0).toUpperCase() + path.slice(1),
    link: index === paths.length - 1 ? null : '/' + paths.slice(0, index + 1).join('/'),
    icon: iconMap[path.toLowerCase()] || iconMap['folder'], // Default to folder icon if not found
  }));
});
</script>

<style scoped>
nav {
  font-size: 0.875rem;
}
</style>
