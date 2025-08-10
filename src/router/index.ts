// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '@/firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { i18n } from '@/i18n';
import Home from '../views/Home.vue';
import AdminLogin from '../views/admin/Login.vue';
import AdminDashboard from '../views/admin/Dashboard.vue';
import DatabaseCheck from '../views/admin/DatabaseCheck.vue';
import EmailDebug from '../views/admin/EmailDebug.vue';
import AutoEpoca from '../views/services/AutoEpoca.vue';
import MezziSpeciali from '../views/services/MezziSpeciali.vue';
import MareAria from '../views/services/MareAria.vue';
import Personalizzazione from '../views/services/Personalizzazione.vue';
import AutoMatrimoni from '../views/services/AutoMatrimoni.vue';
import Privacy from '../views/Privacy.vue';
import Cookie from '../views/Cookie.vue';

// Auth guard con Firebase
const requireAuth = (to: any, from: any, next: any) => {
  const unsubscribe = onAuthStateChanged(auth, user => {
    unsubscribe();

    if (!user || user.email !== 'fracabu@gmail.com') {
      signOut(auth).catch(console.error);
      return next('/admin/login');
    }

    next();
  });
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home',
    },
    {
      path: '/admin',
      children: [
        {
          path: 'login',
          name: 'admin-login',
          component: AdminLogin,
        },
        {
          path: 'dashboard',
          name: 'admin-dashboard',
          component: AdminDashboard,
          beforeEnter: requireAuth,
        },
        {
          path: 'database-check',
          name: 'database-check',
          component: DatabaseCheck,
          beforeEnter: requireAuth,
        },
        {
          path: 'email-debug',
          name: 'email-debug',
          component: EmailDebug,
          beforeEnter: requireAuth,
        },
      ],
    },
    {
      path: '/servizi/auto-epoca',
      name: 'auto-epoca',
      component: AutoEpoca,
    },
    {
      path: '/servizi/mezzi-speciali',
      name: 'mezzi-speciali',
      component: MezziSpeciali,
    },
    {
      path: '/servizi/mare-aria',
      name: 'mare-aria',
      component: MareAria,
    },
    {
      path: '/servizi/personalizzazione',
      name: 'personalizzazione',
      component: Personalizzazione,
    },
    {
      path: '/servizi/auto-matrimoni',
      name: 'auto-matrimoni',
      component: AutoMatrimoni,
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/cookie-policy',
      name: 'cookie',
      component: Cookie,
    },
    {
      // catch-all per rotte non definite
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

// Guard per gestire la lingua
router.beforeEach((to, from, next) => {
  const locale = localStorage.getItem('preferred-locale') || 'it';
  i18n.global.locale.value = locale as 'it' | 'en';
  next();
});

export default router;
