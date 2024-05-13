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
    {
      path:'/home',
      name:'home',
      component:()=>import('../views/HomeView.vue')
    },
    {
      path:'/chartList',
      name:'chartList',
      component:()=>import('../views/chartsList.vue')
    },
    {
      path:'/keepAliveB',
      name:'keepAliveB',
      component:()=>import('../views/keepAliveB.vue')
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
