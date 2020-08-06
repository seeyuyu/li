let express = require('express')
let Mock = require('mockjs')
let menuList = require('./api')
let staticData = require('./static')

let app = express()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
// get
// 菜单
app.get('/mock/menu', function (req, res) {
  res.json(staticData.menuList)
})
// post
app.get('/mock/dataOne', function (req, res) {
  res.json(Mock.mock({
    'status': 200,
    'data|100-199': [{
      'key|+1': 1,
      'mockTitle|1': ['肆无忌惮'],
      'mockContent|1': ['角色精湛主题略荒诞', '理由太短 是让人不安', '疑信参半 却无比期盼', '你的惯犯 圆满', '别让纠缠 显得 孤单'],
      'mockAction|1': ['下载', '试听', '喜欢']
    }]
  }))
})
app.listen('7000', () => {
  console.log('监听端口，7000')
})
