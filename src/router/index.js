import Vue from 'vue'
import Router from 'vue-router'
import System from '@/views/system'
// import Ce from '@/views/ceshi1'
import Shi from '@/views/ceshi2'
// import he from '@/views/he'
import login from '@/views/login'
import iframePage from '@/views/iframe/iframePage'
import roleConfig from '@/views/bgSystem/roleConfig'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '后台',
      component: System,
      meta: {
        title: '测试2',
        headShow: true,
        requireAuth: false
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: login,
      meta: {
        title: '测试2',
        headShow: false
      }
    },

    {
      path: '/shi',
      name: 'Shi',
      component: Shi,
      meta: {
        title: '测试2',
        headShow: true
      }
    },
    {
      path: '/16_1',
      name: '嵌入页面demo',
      component: iframePage,
      meta: {
        title: '测试3',
        headShow: false
      }
    },
    {
      path: '/roleConfig',
      name: '不知道叫什么的页面',
      component: roleConfig,
      meta: {
        title: '测试3',
        headShow: true,
        requireAuth: true // 判断是否需要登录 true:需要登陆
      }
    }
  ]
})
