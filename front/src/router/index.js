import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/diets',
    name: 'Diets',
    meta:{
      layout: 'main'
    },
    component: () => import('@/views/Diets')
  },
  {
    path: '/',
    name: 'Workout',
    meta:{
      layout: 'main'
    },
    component: () => import('@/views/Workout')
  },
  {
    path: '/dietsEditor',
    name: 'DietsEditor',
    meta:{
      layout: 'main'
    },
    component: () => import('@/views/DietsEditor')
  },
  {
    path: '/workoutEditor',
    name: 'WorkoutEditor',
    meta:{
      layout: 'main'
    },
    component: () => import('@/views/WorkoutEditor')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta:{
      layout: 'profile'
    },
    component: () => import('@/views/Profile')
  },
  {
    path: '/authorization',
    name: 'Authorization',
    meta: {
      layout: 'authLayout'
    },
    component: () => import('@/views/Authorization')
  },
  {
    path: '/registratoin',
    name: 'Registratoin',
    meta: {
      layout: 'regLayout'
    },
    component: () => import('@/views/Registratoin')
  },
  {
    path: '/editUser',
    name: 'EditUser',
    meta: {
      layout: 'modalLayout'
    },
    component: () => import('@/views/EditUser')
  },
  {
    path: '/savingProgress',
    name: 'SavingProgress',
    meta: {
      layout: 'modalLayout'
    },
    component: () => import('@/views/SavingProgress')
  },
  {
    path: '/currentProgram',
    name: 'CurrentProgram',
    meta: {
      layout: 'modalLayout'
    },
    component: () => import('@/views/CurrentProgram')
  },
  {
    path: '/currentDiet',
    name: 'CurrentDiet',
    meta: {
      layout: 'modalLayout'
    },
    component: () => import('@/views/CurrentDiet')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
