import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import InfoCar1 from '../views/InfoCar1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/infocar', 
      name: 'infocar',
      component: InfoCar1
    }
  ]
})

export default router