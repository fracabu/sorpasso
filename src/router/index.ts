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
import Supercar from '../views/services/Supercar.vue';
import SuperCars from '../views/services/SuperCars.vue';
import Privacy from '../views/Privacy.vue';
import Cookie from '../views/Cookie.vue';
import ContactPage from '../views/ContactPage.vue';
// Import vintage car subcategories
import Anni1020 from '../views/services/vintage/Anni1020.vue';
import Anni3040 from '../views/services/vintage/Anni3040.vue';
import Anni5060 from '../views/services/vintage/Anni5060.vue';
import Anni70 from '../views/services/vintage/Anni70.vue';
import Anni80 from '../views/services/vintage/Anni80.vue';
// Import supercars subcategories
import SuperCarsModerne from '../views/services/supercars/SuperCarsModerne.vue';
import SuperCarsVintage from '../views/services/supercars/SuperCarsVintage.vue';
import ToursAuto from '../views/services/supercars/ToursAuto.vue';
// Import moto pages
import Moto from '../views/services/Moto.vue';
import MotoEpoca from '../views/services/moto/MotoEpoca.vue';
import MotoModerne from '../views/services/moto/MotoModerne.vue';
import VespeLambrette from '../views/services/moto/VespeLambrette.vue';
import ToursVespe from '../views/services/moto/ToursVespe.vue';
// Import tuning & muscle cars
import TuningMuscleCars from '../views/services/TuningMuscleCars.vue';
// Import mezzi militari pages
import MezziMilitari from '../views/services/MezziMilitari.vue';
import MezziMilitariEpoca from '../views/services/mezzi-militari/Epoca.vue';
import MezziMilitariModerni from '../views/services/mezzi-militari/Moderni.vue';
// Import mare-aria pages
import BarcheYacht from '../views/services/mare-aria/BarcheYacht.vue';
import ElicotteriAerei from '../views/services/mare-aria/ElicotteriAerei.vue';

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
  scrollBehavior(to, from, savedPosition) {
    // Se c'è una posizione salvata (tornando indietro), usa quella
    if (savedPosition) {
      return savedPosition;
    }
    // Altrimenti, scroll al top della pagina
    return { top: 0 };
  },
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
      path: '/servizi/auto-epoca/anni-10-20',
      name: 'auto-epoca-anni-10-20',
      component: Anni1020,
    },
    {
      path: '/servizi/auto-epoca/anni-30-40',
      name: 'auto-epoca-anni-30-40',
      component: Anni3040,
    },
    {
      path: '/servizi/auto-epoca/anni-50-60',
      name: 'auto-epoca-anni-50-60',
      component: Anni5060,
    },
    {
      path: '/servizi/auto-epoca/anni-70',
      name: 'auto-epoca-anni-70',
      component: Anni70,
    },
    {
      path: '/servizi/auto-epoca/anni-80',
      name: 'auto-epoca-anni-80',
      component: Anni80,
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
      path: '/servizi/supercar',
      name: 'supercar',
      component: Supercar,
    },
    {
      path: '/servizi/supercars',
      name: 'supercars',
      component: SuperCars,
    },
    {
      path: '/servizi/supercars/moderne',
      name: 'supercars-moderne',
      component: SuperCarsModerne,
    },
    {
      path: '/servizi/supercars/vintage',
      name: 'supercars-vintage',
      component: SuperCarsVintage,
    },
    {
      path: '/servizi/supercars/tours',
      name: 'supercars-tours',
      component: ToursAuto,
    },
    {
      path: '/servizi/moto',
      name: 'moto',
      component: Moto,
    },
    {
      path: '/servizi/moto/moto-epoca',
      name: 'moto-epoca',
      component: MotoEpoca,
    },
    {
      path: '/servizi/moto/moto-moderne',
      name: 'moto-moderne',
      component: MotoModerne,
    },
    {
      path: '/servizi/moto/vespe-lambrette',
      name: 'vespe-lambrette',
      component: VespeLambrette,
    },
    {
      path: '/servizi/moto/tours-vespe',
      name: 'tours-vespe',
      component: ToursVespe,
    },
    {
      path: '/servizi/tuning-muscle-cars',
      name: 'tuning-muscle-cars',
      component: TuningMuscleCars,
    },
    {
      path: '/servizi/mezzi-militari',
      name: 'mezzi-militari',
      component: MezziMilitari,
    },
    {
      path: '/servizi/mezzi-militari/epoca',
      name: 'mezzi-militari-epoca',
      component: MezziMilitariEpoca,
    },
    {
      path: '/servizi/mezzi-militari/moderni',
      name: 'mezzi-militari-moderni',
      component: MezziMilitariModerni,
    },
    {
      path: '/servizi/mare-aria/barche-yacht',
      name: 'barche-yacht',
      component: BarcheYacht,
    },
    {
      path: '/servizi/mare-aria/elicotteri-aerei',
      name: 'elicotteri-aerei',
      component: ElicotteriAerei,
    },
    {
      path: '/contatti',
      name: 'contact',
      component: ContactPage,
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
