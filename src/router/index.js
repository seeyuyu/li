import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/home'
import Test from '@/views/children/test'
// import Ce from '@/views/ceshi1'
import Shi from '@/views/ceshi2'
// import he from '@/views/he'
import login from '@/views/login'
import createdlist from '@/views/children/createdlist'
import cerIssueAdjust from '@/views/children/cerIssueAdjust'
import birthDefect from '@/views/children/birthDefect'
import referral from '@/views/children/referral'
import transfer from '@/views/children/transfer'
import iframePage from '@/views/iframe/iframePage'
import disadvantaged from '@/views/children/disadvantaged'
import roleConfig from '@/views/bgSystem/roleConfig'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: createdlist,
      meta: {
        title: '测试2',
        headShow: true
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
      path: '/test',
      name: '儿童建卡',
      component: Test,
      meta: {
        title: '主页',
        headShow: true
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
      path: '/10_1',
      name: '儿童建卡列表',
      component: createdlist,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_2',
      name: '出生缺陷个案管理',
      component: birthDefect,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_3',
      name: '儿童死亡个案管理',
      component: cerIssueAdjust,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_4',
      name: '双向转诊',
      component: referral,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_5',
      name: '迁入迁出管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_6',
      name: '高危儿体弱儿管理',
      component: disadvantaged,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_7',
      name: '口腔保健',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_8',
      name: '幼儿园管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_9',
      name: '幼儿园管理新增',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_10',
      name: '新生儿访视',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_11',
      name: '新生儿访视登记',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_12',
      name: '儿童健康体检',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/10_13',
      name: '入园体检',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    // 出生证管理
    {
      path: '/15_1',
      name: '出生证调剂管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_2',
      name: '出生证申领管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_3',
      name: '废证管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_4',
      name: '流动人口签发审核',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_5',
      name: '出生证入库管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_6',
      name: '出生证待签发一览表',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_7',
      name: '档案管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_8',
      name: '出生证补发',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_9',
      name: '出生证出库管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_10',
      name: '出生证换发',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_11',
      name: '出生证统计',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_12',
      name: '出生证签发',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/15_13',
      name: '出生证流转追踪查询',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    // 疾病筛查
    {
      path: '/12_1',
      name: '出生证流转追踪查询',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/12_2',
      name: '儿童视力筛查',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/12_3',
      name: '儿童听力筛查',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/12_4',
      name: '先心筛查',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    // 孕产妇保健
    {
      path: '/14_1',
      name: '孕产妇详情',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_2',
      name: '孕妇建卡',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_3',
      name: '迁入迁出管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_4',
      name: '双向转诊',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_5',
      name: '孕妇死亡个案管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_6',
      name: '转卡管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_7',
      name: '产后42天检查',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_8',
      name: '辅助检查',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_9',
      name: '病史询问',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_10',
      name: '初次检查',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_11',
      name: '产前筛查与诊断',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_12',
      name: '产前附检',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_13',
      name: '妊娠风险管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_14',
      name: '产时管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/14_15',
      name: '体检预约管理',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    // 生育技术
    {
      path: '/13_1',
      name: '基本信息',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/13_2',
      name: '门诊病历',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/13_3',
      name: '辅助检查',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/13_4',
      name: '知情同意书',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/13_5',
      name: '手术记录',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/13_6',
      name: '术后随访',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/13_7',
      name: '双向转诊',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    // 婚前检查
    {
      path: '/11_1',
      name: '双向转诊',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/11_2',
      name: '检查信息',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/11_3',
      name: '基本信息',
      component: transfer,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/16_1',
      name: '嵌入页面demo',
      component: iframePage,
      meta: {
        title: '测试3',
        headShow: true
      }
    },
    {
      path: '/roleConfig',
      name: '不知道叫什么的页面',
      component: roleConfig,
      meta: {
        title: '测试3',
        headShow: false
      }
    }
  ]
})
