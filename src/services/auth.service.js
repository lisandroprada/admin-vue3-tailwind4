// Mock user data
const mockUser = {
  email: 'test@example.com',
  password: '123456',
  name: 'Test User',
  role: 'Administrator'
}

export const authService = {
  login(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === mockUser.email && password === mockUser.password) {
          const userData = {
            email: mockUser.email,
            name: mockUser.name,
            role: mockUser.role,
            token: 'mock-jwt-token'
          }
          localStorage.setItem('user', JSON.stringify(userData))
          resolve(userData)
        } else {
          reject(new Error('Invalid email or password'))
        }
      }, 500) // Simulate API delay
    })
  },

  logout() {
    return new Promise(resolve => {
      localStorage.removeItem('user')
      resolve()
    })
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
  },

  isAuthenticated() {
    return !!this.getCurrentUser()
  }
}
