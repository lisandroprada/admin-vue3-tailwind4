<template>
  <nav class="fixed top-0 z-30 w-full bg-white border-b border-gray-200 dark:bg-[#111827] dark:border-gray-700/50">
    <div class="px-3 py-3 lg:px-5 lg:pl-3 mr-[140px]">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            @click="toggleSidebar"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#1C2A3F] dark:focus:ring-gray-600"
          >
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex items-center space-x-3">
          <button
            @click="toggleDarkMode"
            class="p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#1C2A3F] dark:focus:ring-gray-600"
          >
            <svg v-if="isDarkMode" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>
          <div class="flex items-center ml-3 relative">
            <div>
              <button @click="toggleUserMenu" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <img class="w-8 h-8 rounded-full" :src="'https://ui-avatars.com/api/?name=' + encodeURIComponent(user?.name || 'User')" alt="user photo" />
              </button>
            </div>
            <div
              v-show="isUserMenuOpen"
              class="absolute right-0 top-9 z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-[#1C2A3F] dark:divide-gray-700/50"
            >
              <div class="px-4 py-3">
                <p class="text-sm text-gray-900 dark:text-gray-200">{{ user?.name }}</p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-400">{{ user?.email }}</p>
              </div>
              <ul class="py-1">
                <li>
                  <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#243454] dark:hover:text-white"> Profile </router-link>
                </li>
                <li>
                  <a href="#" @click.prevent="handleLogout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#243454] dark:hover:text-white">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import {ref, computed} from 'vue';
import {useAuthStore} from '../../stores/auth.store';
import {useDarkMode} from '../../composables/useDarkMode';

const authStore = useAuthStore();
const user = computed(() => authStore.user);
const isUserMenuOpen = ref(false);
const emit = defineEmits(['toggle-sidebar']);
const {isDarkMode, toggleDarkMode} = useDarkMode();

const toggleUserMenu = () => {
  isUserMenuOpen.value = !isUserMenuOpen.value;
};

const toggleSidebar = () => {
  console.log('toggleSidebar en TopNav.vue fue llamada!'); // <-- AÑADE ESTA LINEA
  emit('toggle-sidebar');
};

const handleLogout = async () => {
  try {
    await authStore.logout();
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
</script>
