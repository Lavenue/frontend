import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en: {
      main: {
        logo: 'Vue logo',
        welcome: 'Welcome to Your Vue.js App'
      },
      about: {
        intro: 'This is an about page'
      }
    },
    fr: {
      main: {
        logo: 'Vue logo',
        welcome: 'Bienvenue à votre appli Vue.js'
      }
    }
  }
})

createApp(App).use(i18n).use(store).use(router).mount('#app')
