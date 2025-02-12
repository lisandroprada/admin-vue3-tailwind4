import { ref, onMounted } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    updateDarkModeClass();
    localStorage.setItem('darkMode', isDarkMode.value);
  };

  const updateDarkModeClass = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  onMounted(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode !== null) {
      isDarkMode.value = storedDarkMode === 'true';
    }
    updateDarkModeClass();
  });

  return { isDarkMode, toggleDarkMode };
}