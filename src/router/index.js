import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import detailsPage from '../views/DetailsPageView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path:'/',
      name:'login',
      component: LoginView
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path:'/home',
      name:'home',
      component:()=>import('../views/HomeView.vue')
    },
    // {
    //   path:'/login',
    //   name:'login',
    //   component:()=>import('../views/LoginView.vue')
    // },
    {
      path:'/shopCart',
      name:'shopCart',
      component:()=>import('../views/ShopCartView.vue')
    },
    {
      path:'/detailsPage',
      name:'detailsPage',
      // props:true,
      component: detailsPage
    },
    {
      path:'/register',
      component:()=>import('../views/RegisterView.vue')
    }
  ]
})

export default router
