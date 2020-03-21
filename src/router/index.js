import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Index from '../views/Index.vue'
import Setting from '../views/Setting.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/index',
    name: 'Index',
    component: Index
  }, {
    path: '/setting',
    name: 'Setting',
    component: Setting
  }]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') || ''

  console.log('token==from==to', `---${token}---`, from, to)
  if (!token) {
    if (to.name !== 'Login') {
      next('/login')
    } else {
      next()
    }
  } else {
    if (to.name === 'Login') {
      next('/index')
    } else {
      next()
    }
  }

  // next()
})

export default router
