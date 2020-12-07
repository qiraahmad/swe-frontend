import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../components/Cart.vue'
import ContactUs from '../components/contact-form.vue'
import Orders from '../components/orders.vue'
import accountinfo from '../components/account-info.vue'
import wishlist from '../components/wishlist.vue'


import Login from '../components/Auth/login.vue';
import Register from '../components/Auth/register.vue'

import Men from '../components/Mens/men.vue'
import MensMain from '../components/Mens/mens.main.vue'
import MensAccessories from '../components/Mens/categories/menAccessories.vue'
import MenPants from '../components/Mens/categories/menPants.vue'
import MenShirts from '../components/Mens/categories/menShirts.vue'
import MenShoes from '../components/Mens/categories/menShoes.vue'
import MenSports from '../components/Mens/categories/menSports.vue'
import MenSweatres from '../components/Mens/categories/menSweatres.vue'
import AboutUs from '../components/About-Us.vue'
import Product from '../components/product.vue'
import Account from '../views/Account.vue'



import Women from '../components/Women/women.vue'
import WomenMain from '../components/Women/women.main.vue'
import WomenAccessories from '../components/Women/categories/womenAccessories.vue'
import WomenPants from '../components/Women/categories/womenPants.vue'
import WomenShirts from '../components/Women/categories/womenShirts.vue'
import WomenShoes from '../components/Women/categories/womenShoes.vue'
import WomenSports from '../components/Women/categories/womenSports.vue'
import WomenSweatres from '../components/Women/categories/womenSweatres.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: wishlist
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/account-info',
    name: 'account',
    component: accountinfo

  },
  {
    path: '/address',
    name: 'Contact',
    component: ContactUs,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path:'/men',
    name:'men',
    component:Men,
    children:[
      {path:'',component:MensMain,name:'MensMain'},
      {path:'menAccessories',component:MensAccessories,name:'MensAccessories'},
      {path:'menPants',component:MenPants,name:'MensPants'},
      {path:'menShirts',component:MenShirts,name:'MensShirts'},
      {path:'menShoes',component:MenShoes,name:'MensShoes',props:{catg:'shoes'}},
      {path:'menSports',component:MenSports,name:'MensSports'},
      {path:'menSweaters',component:MenSweatres,name:'MensSweatres'},
    ],
  },
  {
    path:'/collections',
    name:'women',
    component:Women,
    children:[
      {path:'',component:WomenMain,name:'WomenMain'},
      {path:'womenAccessories',component:WomenAccessories,name:'WomenAccessories'},
      {path:'womenPants',component:WomenPants,name:'WomenPants'},
      {path:'womenShirts',component:WomenShirts,name:'WomenShirts'},
      {path:'womenShoes',component:WomenShoes,name:'WomenShoes'},
      {path:'Summer2020',component:WomenSports,name:'WomenSports'},
      {path:'Spring2020',component:WomenSweatres,name:'WomenSweatres'},
    ],
  },

  {
    path:'/cart',
    name:'cart',
    component:Cart,
    children:[],
     
  },
  {
    path:'/account',
    name:'account',
    component:Account,
    children:[],
     
  },
  {
    path: '/About-Us',
    name: 'About-Us',
    component: AboutUs,
  },
  
  {
    path:'/login',
    name:'login',
    component:Login,
    children:[],
     
  },

  
  {
    path:'/register',
    name:'register',
    component:Register,
    children:[],
     
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
 scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
})

export default router
