import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { authService } from '../services/auth.service'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref(authService.getCurrentUser())
  const isAuthenticated = computed(() => !!user.value)

  async function login(email, password) {
    try {
      const userData = await authService.login(email, password)
      user.value = userData
      router.push('/')
      return true
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  async function logout() {
    try {
      await authService.logout()
      user.value = null
      router.push('/auth/login')
    } catch (error) {
      console.error('Logout error:', error)
      throw error
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
})
