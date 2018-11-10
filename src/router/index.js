import Vue from 'vue'
import Router from 'vue-router'
import login from 'views/login/login'
import home from 'views/home/home'
import index from 'views/index/index'
import administration from 'views/administration/administration'
Vue.use(Router)

export default new Router({
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
      children:[
        {
          path: 'index',
          name: 'index',
          component: index
        },
        {
          path: 'administration',
          name: 'administration',
          component: administration
        }
      ]
    }
  ]
})
