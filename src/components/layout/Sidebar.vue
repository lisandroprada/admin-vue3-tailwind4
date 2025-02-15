<template>
  <transition name="slide">
    <aside
      v-if="isOpen"
      :class="[
        'fixed top-0 left-0 z-40 flex flex-col h-full w-20 bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-gray-800 transition-all duration-500 ease-in-out',
        isClosed ? 'sidebar-closed' : '',
      ]"
      aria-label="Sidebar"
    >
      <div class="flex-1 flex flex-col pt-1 pb-4 overflow-y-auto">
        <nav class="mt-8 flex-1 space-y-2 px-2" aria-label="Sidebar">
          <div v-for="item in navigation" :key="item.name">
            <!-- Items sin submenu -->
            <router-link
              v-if="!item.children"
              :to="item.href"
              :class="[
                isActive(item.href) ? 'bg-gray-100 dark:bg-[#1C2A3F] text-gray-900 dark:text-white' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-[#1C2A3F] dark:hover:text-white',
                'group flex flex-col items-center py-3 px-2 text-sm font-medium rounded-lg transition-colors duration-150',
              ]"
              @click="closeSubMenu"
            >
              <component :is="item.icon" class="h-6 w-6 mb-1" />
              <span class="text-xs">{{ item.name }}</span>
            </router-link>
            <!-- Item con submenu -->
            <div v-else class="group">
              <button
                @click="
                  () => {
                    console.log('Button clicked for:', item.name);
                    toggleSubMenu(item);
                  }
                "
                :class="[
                  item.open ? 'bg-gray-100 dark:bg-[#1C2A3F] text-gray-900 dark:text-white' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-[#1C2A3F] dark:hover:text-white',
                  'flex flex-col items-center py-3 px-2 text-sm font-medium rounded-lg transition-colors duration-150 w-full',
                ]"
              >
                <component :is="item.icon" class="h-6 w-6 mb-1" />
                <span class="text-xs">{{ item.name }}</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div class="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-800 p-2">
        <button
          @click="toggleDarkMode"
          class="w-full flex flex-col items-center p-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#1C2A3F] rounded-lg transition-colors duration-150"
        >
          <MoonIcon v-if="isDarkMode" class="h-6 w-6 mb-1 text-gray-400 dark:text-gray-500" />
          <SunIcon v-else class="h-6 w-6 mb-1 text-gray-400" />
          <span class="text-xs">{{ isDarkMode ? 'Dark' : 'Light' }}</span>
        </button>
      </div>
    </aside>
  </transition>

  <!-- Drawer del submenu -->
  <transition name="slide">
    <div v-if="openSubmenu && isOpen" class="fixed top-[64px] left-20 z-10 w-48 h-full bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-gray-800 transition-transform duration-300">
      <div class="p-4 space-y-2">
        <router-link
          v-for="child in openSubmenu.children"
          :key="child.name"
          :to="child.href"
          :class="[
            isActive(child.href) ? 'bg-gray-100 dark:bg-[#1C2A3F] text-gray-900 dark:text-white' : 'text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-[#1C2A3F] dark:hover:text-white',
            'block rounded-lg p-2 transition-colors duration-150 flex items-center gap-2 text-sm font-medium',
          ]"
          @click="closeSubMenu"
        >
          <component :is="child.icon" class="h-5 w-5" />
          {{ child.name }}
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useRoute} from 'vue-router';
import {useDarkMode} from '@/composables/useDarkMode';
import {HomeIcon, UserCircleIcon, ChartBarIcon, DocumentIcon, Cog6ToothIcon, SunIcon, MoonIcon, BuildingOfficeIcon, UserGroupIcon, DocumentTextIcon} from '@heroicons/vue/24/outline';

const navigation = [
  {name: 'Home', href: '/', icon: HomeIcon},
  {name: 'Profile', href: '/profile', icon: UserCircleIcon},
  {name: 'Analytics', href: '/analytics', icon: ChartBarIcon},
  {name: 'Reports', href: '/reports', icon: DocumentIcon},
  {name: 'Settings', href: '/settings', icon: Cog6ToothIcon},
  {
    name: 'Applications',
    icon: HomeIcon,
    open: false,
    children: [
      {name: 'Properties', href: '/applications/properties', icon: BuildingOfficeIcon},
      {name: 'Contacts', href: '/applications/contacts', icon: UserGroupIcon},
      {name: 'Contracts', href: '/applications/contracts', icon: DocumentTextIcon},
    ],
  },
];

const route = useRoute();
const {isDarkMode, toggleDarkMode} = useDarkMode();

const isActive = (href) => route.path === href;

const openSubmenu = ref(null);

const toggleSubMenu = (item) => {
  console.log('toggleSubMenu called'); // Verifying if the method is called
  if (item.children) {
    console.log('Toggling submenu for:', item.name); // Mensaje de consola
    // Cierra otros submenús abiertos
    navigation.forEach((navItem) => {
      if (navItem.children && navItem !== item) {
        navItem.open = false;
      }
    });
    item.open = !item.open;
    openSubmenu.value = item.open ? item : null;
    console.log('openSubmenu:', openSubmenu.value); // Mensaje de consola
  }
};

const closeSubMenu = () => {
  if (openSubmenu.value) {
    openSubmenu.value.open = false; // Ensure the submenu state is updated
    openSubmenu.value = null;
  }
};

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

const isClosed = ref(false);

const toggleSidebar = () => {
  isClosed.value = !isClosed.value;
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* .sidebar-closed { */
/* Estilos para el sidebar cerrado */
/* } */
</style>
