import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    // {
    //   path:'/home',
    //   name:'home',
    //   component:()=>import('../views/HomeView.vue')
    // },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/LoginView.vue')
    },
    {
      path:'/shopCard',
      name:'shopCard',
      component:()=>import('../views/ShopCardView.vue')
    },
    {
      path:'/detailsPage',
      name:'detailsPage',
      component:()=>import('../views/DetailsPageView.vue')
    }
  ]
})

export default router
