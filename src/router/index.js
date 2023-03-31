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
    component: () => import('@/views/fram/feild.vue'),
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
      {
        path: '/ControlCommands',
        name: 'ControlCommands',
        component: () => import('../views/pages/ControlCommands.vue')
      }, {
        path: '/DeviceParameters',
        name: 'DeviceParameters',
        component: () => import('../views/pages/DeviceParameters.vue')
      },
      {
        path: '/ParameterSettings',
        name: 'ParameterSettings',
        component: () => import('../views/pages/ParameterSettings.vue')
      },
      {
        path: '/UserManagement',
        name: 'UserManagement',
        component: () => import('../views/pages/UserManagement.vue')
      },
      {
        path: '/BatteryMBMU',
        name: 'BatteryMBMU',
        component: () => import('../views/pages/BatteryMBMU.vue')
      }, {
        path: '/BatterySBMU01',
        name: 'BatterySBMU01',
        component: () => import('../views/pages/BatterySBMU01.vue')
      },
      {
        path: '/BatterySBMU02',
        name: 'BatterySBMU02',
        component: () => import('../views/pages/BatterySBMU02.vue')
      }, {
        path: '/BatterySBMU03',
        name: 'BatterySBMU03',
        component: () => import('../views/pages/BatterySBMU03.vue')
      }, {
        path: '/BatterySBMU04',
        name: 'BatterySBMU04',
        component: () => import('../views/pages/BatterySBMU04.vue')
      },


    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
