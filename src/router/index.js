import {createRouter, createWebHistory} from 'vue-router';
import MainLayout from '../components/layout/MainLayout.vue';
import LoginView from '../views/auth/LoginView.vue';
import RegisterView from '../views/auth/RegisterView.vue';
import RecoverView from '../views/auth/RecoverView.vue';
import {authService} from '../services/auth.service';

const routes = [
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        component: LoginView,
        meta: {requiresGuest: true},
      },
      {
        path: 'register',
        component: RegisterView,
        meta: {requiresGuest: true},
      },
      {
        path: 'recover',
        component: RecoverView,
        meta: {requiresGuest: true},
      },
    ],
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: () => import('../views/DashboardView.vue'),
      },
      {
        path: 'profile',
        component: () => import('../views/ProfileView.vue'),
      },
      {
        path: 'reports',
        component: () => import('../views/app/ReportsView.vue'),
      },
      {
        path: 'analytics',
        component: () => import('../views/app/AnalyticsView.vue'),
      },
      {
        path: 'settings',
        component: () => import('../views/app/SettingsView.vue'),
      },
      // Agrupamos en "applications" las rutas del submenú
      {
        path: 'applications',
        children: [
          {
            path: 'properties',
            component: () => import('../views/app/PropertiesView.vue'),
          },
          {
            path: 'contacts',
            component: () => import('../views/app/ContactsView.vue'),
          },
          {
            path: 'contracts',
            component: () => import('../views/app/ContractsView.vue'),
          },
        ],
      },
    ],
    meta: {requiresAuth: true},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = authService.isAuthenticated();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/auth/login');
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (isAuthenticated) {
      next('/');
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
