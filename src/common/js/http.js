import Vue from 'vue'
import axios from 'axios'
import router from '../../router'
// import router from '@/router'

// 创建axios实例
const service = axios.create({
  timeout: 1000 * 30,
  // 允许跨域带token
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // window.localStorage.getItem("accessToken") 获取token的value
  let token = window.sessionStorage.getItem('token')
  if (token) {
    // 将token放到请求头发送给服务器,将tokenkey放在请求头中
    config.headers.authorization = 'Bearer ' + token
    // 也可以这种写法
    // config.headers['accessToken'] = Token;
    return config
  } else {
    // 将token放到请求头发送给服务器,将tokenkey放在请求头中
    config.headers.authorization = 'Bearer '
    // 也可以这种写法
    // config.headers['accessToken'] = Token;
    return config
  }
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => {
  if (response.status === 200) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response)
  }
  // return response
}, error => {
  if (error.response.status) {
    switch (error.response.status) {
      case 401:
        let token = window.sessionStorage.getItem('token')
        if (token) {
          Vue.cookie.delete('token')
        }
        // router.push({name: 'login'})
        router.push({
          name: 'login', // 从哪个页面跳转
          query: {
            retUrl: window.location.href.split('#')[1] || '',
            is_new_user_url: 1
          }
        })
        break
      case 404:
        console.log('网络请求不存在')
        // Toast({
        //   message: '网络请求不存在',
        //   duration: 1500,
        //   forbidClick: true
        // });
        break
      // 其他错误，直接抛出错误提示
      default:
        // Toast({
        //   message: error.response.data.message,
        //   duration: 1500,
        //   forbidClick: true
        // });
    }
  }

  // if (error.response.status && error.response.status === 401) { // 401, token失效
  //   let token = window.sessionStorage.getItem('token')
  //   if (token) {
  //     Vue.cookie.delete('token')
  //   }
  //   // router.push({name: 'login'})
  //   router.push({
  //     name: 'login', // 从哪个页面跳转
  //     query: {
  //       retUrl: window.location.href.split('#')[1] || '',
  //       is_new_user_url: 1
  //     }
  //   })
  // }
  return Promise.reject(error.response)
})

// export default service
// 封装get
export const get = (url) => {
  // params = params || {};
  // 这里需要返回，service  ,此处用了装饰者模式，返回的一个函数
  return service.get(url, {})
}
// 封装post
export const post = (url, params) => {
  params = params || {}
  return service.post(url,
    params
  ).then((res) => {
    return Promise.resolve(res.data)
  }).catch((error) => {
    return Promise.reject(error)
  })
}
