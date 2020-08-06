// import { loginUrl } from './config'
import axios from 'axios'
import md5 from 'js-md5'

// import { get, post} from 'common/js/http'

export function $login (name, password) {
  return axios
    .post('http://192.168.11.43:59000/PassportAPI/Login', {
      name: name,
      passWord: md5(password)
    })
    .then((res) => {
      if (res.status === 200) {
        return Promise.resolve(res.data)
      // this.setCurrent(this.leftTableData[0], 1) // 设置单选，目前以走点击事件代替
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
