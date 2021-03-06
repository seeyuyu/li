// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import { mutations } from 'common/js/store'

Vue.prototype.$axios = axios
Vue.use(ElementUI)

Vue.config.productionTip = false

// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // console.log(next)
  let cToken = mutations.getCookie('cToken')
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限  requireAuth为true:需要登陆
    // console.log('需要登录权限');
    // let cToken = mutations.getCookie('cToken')
    if (cToken) {
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    // let cToken = mutations.getCookie('cToken')
    if (cToken) {
      if (to.matched.some(record => record.path === '/login')) {
        console.log(to.matched)
        next({
          path: '/'
        })
      }
      next()
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
