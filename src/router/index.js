import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import City from '../pages/city/city.vue'
import Detail from '../pages/Detail/Detail.vue'
import Payment from '../pages/payment/Payment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/payment',
      name: 'Payment',
      component: Payment
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
