import Vue from 'vue'

export let store = Vue.observable({
  name: ''
})
export let mutations = {
  changeName (name) {
    store.name = name
  },
  // 获取cookie
  getCookie (cname) {
    let name = cname + '='
    let ca = document.cookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      console.log(c)
      while (c.charAt(0) === ' ') c = c.substring(1)
      if (c.indexOf(name) !== -1) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  },
  // 设置cookie
  setCookie (cname, value, expire) {
    let date = new Date()
    date.setSeconds(date.getSeconds() + expire)
    document.cookie = cname + '=' + escape(value) + '; expires=' + date.toGMTString()
    // console.log(document.cookie)
  }
}
