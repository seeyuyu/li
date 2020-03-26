import { apiUrl } from './config'
import axios from 'axios'
// import { get, post} from 'common/js/http'

export function $getTableD () {
  return axios
    .get(apiUrl + 'GetDEPT_DICTs')
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
export function $getTableR () {
  return axios
    .get(apiUrl + 'GetOP_AUTH_ROLE_DICTs')
    .then((res) => {
      if (res.status === 200) {
        return Promise.resolve(res.data)
        // this.setCurrent(this.roleTableData[0], 2) // 设置单选，目前以走点击事件代替
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
export function $getTableM () {
  return axios
    .get(apiUrl + 'GetOP_AUTH_MODULE_DICTs')
    .then((res) => {
      if (res.status === 200) {
        return Promise.resolve(res.data)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
// 获取表格间关系table1和table2
export function $getRelationR (deptCode) {
  return axios
    .get(apiUrl + 'GetOP_AUTH_DEPT_VS_ROLE?deptCode=' + deptCode)
    .then((res) => {
      // rolE_ID
      return Promise.resolve(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
// 获取表格间关系table2和table3
export function $getRelationM (roleID) {
  return axios
    .get(apiUrl + 'GetOP_AUTH_MODULE_VS_ROLE?roleID=' + roleID)
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
// table2复选框变化————设置角色部门关系
export function $addRvsD (subRelRole) {
  return axios
    .post(apiUrl + 'AddRoleIDVsDeptCode', subRelRole)
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
// table2复选框变化————设置角色部门关系
export function $addRvsM (subRelmoudle) {
  return axios
    .post(apiUrl + 'AddRoleIDVsModuleID', subRelmoudle)
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
// table2 添加/修改角色
export function $addRole (roleForm) {
  return axios
    .post(apiUrl + 'AddOrEditOP_AUTH_ROLE_DICT', roleForm)
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
// table3 添加/修改模块
export function $addModule (moduleForm) {
  return axios
    .post(apiUrl + 'AddOrEditOp_Auth_Module', moduleForm)
    .then((res) => {
      if (res.data === true) {
        this.$message({
          message: '保存成功',
          type: 'success'
        })
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
