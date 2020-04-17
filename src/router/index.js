import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'

import Home from '../views/Home.vue'

import Nav from '../components/Nav.vue'
import logins from '../components/logins.vue'
import user from "../components/user.vue"



Vue.use(VueRouter)


  const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/',
    name: 'Nav',
    component: Nav
  },    
  {
    path: "/login",
    name: "login",
    component: logins
},
{
    path: "/user",
    name: "user",
    component: user,
    beforeEnter: (to, from, next) => {
        if(store.state.authenticated == false) {
            next(false);
        } else {
            next();
        }
    }
}, 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bli_kund',
    name: 'bli_kund',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bli_kund.vue')
  },
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
},
  {
    path: "/hotel",
    name: "Hotel",
    component: () =>
      import(/* webpackChunkName: "hotel" */ "../views/Hotel.vue")
  },
  {
    path: "/booking",
    name: "Booking",
    component: () => import(/* */ "../views/Booking.vue")
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});





export default router;


