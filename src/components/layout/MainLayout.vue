<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0B1121] flex">
    <Sidebar :isOpen="isSidebarOpen" />
    <div :class="[isSidebarOpen ? 'ml-20' : 'ml-0', 'mr-16 flex-1 transition-all duration-500 ease-in-out']">
      <TopNav :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
      <main class="pt-16">
        <router-view />
      </main>
    </div>
    <ChatDrawer :isOpen="isChatOpen" />
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Sidebar from './Sidebar.vue';
import TopNav from './TopNav.vue';
import ChatDrawer from './ChatDrawer.vue';

const isSidebarOpen = ref(true);
const isChatOpen = ref(true);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value;
};
</script>
