import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExercisesView from '../views/ExercisesView'
import ProgramsView from '../views/ProgramsView'
import SignUpView from '../views/SignUpView'
import MyPageView from '../views/MyPageView'
import DescribeView from '../views/DescribeView'

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
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/exercises',
    name: 'exercises',
    component: ExercisesView
  },
  {
    path: '/programs',
    name: 'programs',
    component: ProgramsView
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPageView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/describe',
    name: 'describe',
    component: DescribeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
