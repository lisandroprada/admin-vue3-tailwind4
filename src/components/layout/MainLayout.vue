<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0B1121] flex">
    <div class="flex-1 flex flex-col transition-[margin] ease-in-out duration-500 mr-12">
      <TopNav @toggle-sidebar="toggleSidebar" />
      <Sidebar :is-open="isSidebarOpen" />
      <main class="pt-16 flex-1">
        <Container>
          <Breadcrumb />
          <router-view />
        </Container>
      </main>
    </div>
    <ChatDrawer />
  </div>
</template>

<script setup>
import {ref} from 'vue';
import TopNav from './TopNav.vue';
import Sidebar from './Sidebar.vue';
import ChatDrawer from './ChatDrawer.vue';
import Container from './Container.vue';
import Breadcrumb from './Breadcrumb.vue';

const isSidebarOpen = ref(true);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>
