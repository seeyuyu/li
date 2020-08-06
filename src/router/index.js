import Vue from 'vue'
import Router from 'vue-router'
import System from '@/views/system'
// import Ce from '@/views/ceshi1'
// import Shi from '@/views/ceshi2'
// import he from '@/views/he'
import login from '@/views/login'

import test from '@/views/testPage/test'
import test1 from '@/views/testPage/test1'
// import test3 from '@/views/testPage/test3'
import test4 from '@/views/testPage/test4'
// import iframePage from '@/views/iframe/iframePage'
// import roleConfig from '@/views/bgSystem/roleConfig'

const dashboard = resolve => require(['@/views/testPage/test3'], resolve)
// 使用了vue-router的Lazy Loading Routes

// 所有权限通用路由表
// 如首页和登录页和一些不用权限的公用页面
export const constantRouterMap = [
  { path: '/login', component: login },
  {
    path: '/',
    name: 'index',
    component: System,
    meta: {
      title: '测试2',
      headShow: true,
      requireAuth: false
    }
  },
  {
    path: '/test3',
    component: test4,
    redirect: '/dashboard',
    name: '首页',
    children: [{ path: 'dashboard', component: dashboard }]
  }
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: test,
  //   // redirect: '/dashboard',
  //   children: [{ path: 'test1', name: 'test1', component: test1 }] // 以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了
  // }
]

Vue.use(Router)

export default new Router({
  routes: constantRouterMap
  // routes: [
  //   {
  //     path: '/',
  //     name: 'index',
  //     component: System,
  //     meta: {
  //       title: '测试2',
  //       headShow: true,
  //       requireAuth: false
  //     }
  //   },
  //   {
  //     path: '/login',
  //     name: 'Login',
  //     component: login,
  //     meta: {
  //       title: '测试2',
  //       headShow: false
  //     }
  //   },

  //   {
  //     path: '/shi',
  //     name: 'Shi',
  //     component: Shi,
  //     meta: {
  //       title: '测试2',
  //       headShow: false
  //     }
  //   },
  //   {
  //     path: '/16_1',
  //     name: '嵌入页面demo',
  //     component: iframePage,
  //     meta: {
  //       title: '测试3',
  //       headShow: false
  //     }
  //   },
  //   {
  //     path: '/roleConfig',
  //     name: '不知道叫什么的页面',
  //     component: roleConfig,
  //     meta: {
  //       title: '测试3',
  //       headShow: true,
  //       requireAuth: false // 判断是否需要登录 true:需要登陆
  //     }
  //   }
  // ]
})

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '/permission',
    component: test,
    name: 'test',
    meta: { role: ['admin', 'super_editor'] }, // 页面需要的权限
    children: [
      {
        path: 'test1',
        component: test1,
        name: 'test1',
        meta: { role: ['admin', 'super_editor'] } // 页面需要的权限
      }]
  },
  { path: '*', redirect: '/404', hidden: true } // 注意是 404 页面一定要最后加载，如果放在constantRouterMap一同声明了404，后面的所以页面都会被拦截到404
]
