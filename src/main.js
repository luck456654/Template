import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Vue2 from '../views/Vue2View'
import SettingsView from '../views/SettingsView'
import DevView from '../views/DevView'
import DevView2 from '../views/DevView2'
import Vue3 from '../views/Vue3View'
import store from '../store/store'


const router = createRouter({
    routes: [{
        path: '/vue2',
        component: Vue2
      },
      {
        path: '/dev',
        component: DevView
      },
      {
        path: '/dev2',
        component: DevView2
      },
      {
        path: '/',
        component: Vue3
      },
      {
        path: '/settings',
        component: SettingsView
      }],
  history: createWebHistory()
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')