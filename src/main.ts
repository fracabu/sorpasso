import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createHead } from '@vueuse/head' // ✅ aggiunto

// Initialize AOS
AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: true
})

const app = createApp(App)
const head = createHead() // ✅ aggiunto

// Install plugins
app.use(router)
app.use(i18n)
app.use(head) // ✅ aggiunto

app.mount('#app')
