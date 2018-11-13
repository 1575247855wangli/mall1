import Vue from 'vue'
import Router from 'vue-router'
import login from 'views/login/login'
import home from 'views/home/home'
import index from 'views/index/index'
import administration from 'views/administration/administration'
import product from 'views/product/product'
import order from 'views/order/order'
import user from 'views/user/user'
import total from 'views/total/total'
Vue.use(Router)

export default new Router({
  "mode":"history",
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/home',
      name:'home',
      component:home,
      meta: {breadName:'首页'},
      children:[
        {
          path: 'index',
          name: 'index',
          component: index,
          meta: {breadName:'首页'}
        },
        {
          path:"total",
          name:"administration",
          component:total,
          meta: {breadName:'商品'},
          children:[
            {
              path: 'administration',
              name: 'administration',
              component: administration,
              meta: {breadName:'商品管理'},
            },
            {
              path: 'product',
              name: 'product',
              component: product,
              meta: {breadName:'品类管理'},

            }
          ]
        },
        {
          path: 'order',
          name: 'order',
          component: order,
          meta: {breadName:'订单管理'}
        },
        {
          path: 'user',
          name: 'user',
          component: user,
          meta: {breadName:'用户管理'}
        }
      ]
    }
  ]
})
