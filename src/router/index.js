import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/feild',
    name: 'feild',
    component: () => import('../views/pages/HistoricalData.vue'),
    children: [
      {
        path: '/BatteryPackMonitoring',
        name: 'BatteryPackMonitoring',
        component: () => import('../views/pages/BatteryPackMonitoring')
      },
      {
        path: '/RealtimeWarning',
        name: 'RealtimeWarning',
        component: () => import('../views/pages/RealtimeWarning.vue')
      },
      {
        path: '/HistoricalData',
        name: 'HistoricalData',
        component: () => import('../views/pages/HistoricalData.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
