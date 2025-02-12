<script setup>
import { useDarkMode } from '../composables/useDarkMode';

const { isDarkMode, toggleDarkMode } = useDarkMode();

const toggle = () => {
  toggleDarkMode();
};
</script>

<template>

    <button @click="toggle" class="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    {{ isDarkMode ? 'Modo Diurno' : 'Modo Nocturno' }}
  </button>

<h1 class="text-3xl font-bold underline">Hello World</h1>

  <div :class="{'dark': isDarkMode}" class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
    <h1 class="text-2xl font-bold mb-4">Modo Nocturno en Vue 3 y Tailwind CSS (Refinado)</h1>
    <p class="mb-4">Este es un ejemplo con un switch separado y un composable para manejar el modo nocturno.</p>
    <DarkModeSwitch />
  </div>
</template>

<style>

</style>
