<template>
  <!-- <div class="content"> -->
    <div class="content tableContent roleConfig">
        <div class="table table1 leftTable fl">
            <div class="search-Box">
                <el-input
                    placeholder="请输入关键字"
                    icon="search"
                    class="search"
                    v-model="search"
                ></el-input>
            </div>
            <el-table
                :data="tableSearch"
                style="width: 100%"
                :height="curHeight-30"
                ref="singleTable"
                highlight-current-row
                @current-change="leftTableChange"
            >
                <el-table-column
                    prop="depT_CODE"
                    label="部门编码"
                ></el-table-column>
                <el-table-column
                    prop="depT_NAME"
                    label="部门名称"
                > </el-table-column>
            </el-table>
        </div>
        <div class="rightTable fl">
            <div class="table table2">
                <el-table
                    v-loading="roleLoading"
                    ref="multipleTable"
                    :data="roleTableData"
                    tooltip-effect="dark"
                    style="width: 100%"
                    :height="curHeight/2"
                    highlight-current-row
                    @current-change="roleTableChange"
                    @select="handleSelectionChange">
                    <el-table-column
                    type="selection"
                    width="55">
                    </el-table-column>
                    <el-table-column
                    label="角色名称"
                    width="120"
                    prop="rolE_NAME">
                    <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
                    </el-table-column>
                    <el-table-column
                    prop="permissioN_TYPE"
                    label="角色类别"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="rolE_ID"
                    label="权限ID"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                    prop="hospitaL_NO"
                    label="医院编码"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        align="right"
                        fixed="right">
                        <template slot="header" slot-scope="scope">
                            <el-button size="mini" @click="addrole('新增角色',1)" type="primary" plain>新增</el-button>
                        </template>
                        <template slot-scope="scope">
                            <el-button size="mini" type="text" @click="editrole('编辑角色',scope.row,1)">编辑</el-button>
                            <!-- <span
                            size="mini"
                            class="el-tag el-tag--info el-tag--mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</span> -->
                            <!-- <span
                            class="el-tag el-tag--danger el-tag--mini"
                            @click="handleDelete(scope.$index, scope.row)">删除</span> -->
                        </template>
                        </el-table-column>
                </el-table>
            </div>
            <div class="table table3">
                <el-table
                v-loading="moduleLoading"
                ref="roleTableRef"
                @select="moduleSelectionChange"
                :height="curHeight/2"
                size="mini" :data="moduleTableData" style="width: 100%">
                    <el-table-column
                    type="selection"
                    width="55"></el-table-column>
                    <!-- <el-table-column v-for="(v,i) in master_user.columns" :prop="v.field" :label="v.title" :width="v.width">
                        <template slot-scope="scope">
                            <span v-if="scope.row.isSet">
                                <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel[v.field]">
                                </el-input>
                            </span>
                            <span v-else>{{scope.row[v.field]}}</span>
                        </template>
                    </el-table-column> -->
                    <el-table-column
                    prop="modulE_NAME"
                    label="组件名称"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="modulE_CLASS_NAME"
                    label="组件类名"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="modulE_FILE_NAME"
                    label="Dll名称"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="modulE_TYPE"
                    label="组件类型"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="orderno"
                    label="排序号"
                    width="80">
                    </el-table-column>
                    <el-table-column
                    prop="sys_code"
                    label="系统编码"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="propertY1"
                    label="属性1"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="propertY2"
                    label="属性2"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="propertY3"
                    label="属性3"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="remark"
                    label="备注"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="status"
                    label="状态"
                    width="80"
                    :formatter="statusFormatter">
                    </el-table-column>
                    <!-- 行内编辑 -->
                    <!-- <el-table-column v-for="(v,i) in master_user.columns" :prop="v.field" :label="v.title" :width="v.width">
                        <template slot-scope="scope">
                            <el-select v-model="scope.row.fildtp" clearable  >
                              <el-option
                                v-for="item in fildtps"
                                :key="item.value"
                                :label="item.text"
                                :value="item.value">
                              </el-option>
                            </el-select>
                        </template>
                    </el-table-column> -->
                    <!-- <el-table-column label="操作" width="100" fixed="right">
                        <template slot="header" slot-scope="scope">
                            <el-input
                            v-model="search"
                            size="mini"
                            placeholder="输入关键字搜索"/>
                        </template>
                        <template slot-scope="scope">
                            <span class="el-tag el-tag--info el-tag--mini" style="cursor: pointer;" @click="pwdChange(scope.row,scope.$index,true)">
                                {{scope.row.isSet?'保存':"修改"}}
                            </span>
                            <span v-if="!scope.row.isSet" class="el-tag el-tag--danger el-tag--mini" style="cursor: pointer;">
                                删除
                            </span>
                            <span v-else class="el-tag  el-tag--mini" style="cursor: pointer;" @click="pwdChange(scope.row,scope.$index,false)">
                                取消
                            </span>
                        </template>
                    </el-table-column> -->
                    <!-- 行内编辑 -->
                    <el-table-column
                        align="right"
                        fixed="right">
                        <template slot="header" slot-scope="scope1">
                            <el-button size="mini" @click="addrole('新增模块',2)" type="primary" plain>新增</el-button>
                        </template>
                        <template slot-scope="scope">
                            <el-button size="mini" type="text" @click="editrole('编辑模块',scope.row,2)">编辑</el-button>
                            <!-- <span
                            size="mini"
                            class="el-tag el-tag--info el-tag--mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</span> -->
                            <!-- <span
                            class="el-tag el-tag--danger el-tag--mini"
                            @click="handleDelete(scope.$index, scope.row)">删除</span> -->
                        </template>
                        </el-table-column>
                </el-table>
                <!-- <div class="el-table-add-row" style="width: 99.2%;" @click="addMasterUser()"><span>+ 添加</span></div> -->
            </div>
            <!-- 弹出层 -->
            <el-dialog :visible.sync="dialogFormVisible" class="dialogDiv" top="4%">
                <div slot="title" class="header-title">
                    <span class="title-name">{{ dialogtitle }}</span>
                </div>
            <el-form :model="roleForm" v-if="dialogkind===1">
                <el-form-item label="角色名称" :label-width="formLabelWidth">
                <el-input v-model="roleForm.rolE_NAME" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="角色类别" :label-width="formLabelWidth">
                <el-input v-model="roleForm.permissioN_TYPE" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="权限ID" :label-width="formLabelWidth">
                <el-input v-model="roleForm.rolE_ID" autocomplete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="角色类别" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                </el-form-item> -->
            </el-form>
            <el-form :model="moduleForm" v-else class="dialogFrm" :style="{ height: curHeight-270 + 'px' }">
                <el-form-item label="组件名称" :label-width="formLabelWidth">
                <el-input v-model="moduleForm.modulE_NAME" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="类名称" :label-width="formLabelWidth">
                <el-input v-model="moduleForm.modulE_CLASS_NAME" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="DLL名称" :label-width="formLabelWidth">
                <el-input v-model="moduleForm.modulE_FILE_NAME" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="组件类型" :label-width="formLabelWidth">
                <el-select v-model="moduleForm.modulE_TYPE" placeholder="">
                    <el-option label="UC" value="UC"></el-option>
                    <el-option label="Widget" value="Widget"></el-option>
                    <el-option label="Frm" value="Frm"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="所属系统" :label-width="formLabelWidth">
                <el-select v-model="moduleForm.sys_code" placeholder="">
                    <el-option label="产科专科(编码：001)" value="001"></el-option>
                    <el-option label="妇幼门诊(编码：002)" value="002"></el-option>
                    <el-option label="妇幼系统(编码：003)" value="003"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="排序号" :label-width="formLabelWidth">
                <el-input v-model="moduleForm.orderno" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="属性1" :label-width="formLabelWidth">
                <el-input v-model="moduleForm.propertY1" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="属性2" :label-width="formLabelWidth">
                <el-input v-model="moduleForm.propertY2" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="属性3" :label-width="formLabelWidth">
                <el-input v-model="moduleForm.propertY3" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="状态" :label-width="formLabelWidth">
                <el-select v-model="moduleForm.status" placeholder="">
                    <el-option label="启用" value="001"></el-option>
                    <el-option label="停用" value="002"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="备注" :label-width="formLabelWidth">
                <el-input v-model="moduleForm.remark" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="formSubmit">确 定</el-button>
            </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import '../../common/css/cover.css' // 覆盖已有样式，多页面引用，需加特有类名
import { $getRelationR, $getRelationM, $addRvsD, $addRvsM, $getTableD, $getTableR, $getTableM, $addRole, $addModule } from 'api/roleConfig'

export default {
  data () {
    return {
      leftTableData: [], // 左边table
      roleTableData: [], // 右上table
      moduleTableData: [], // 右下table
      dialogFormVisible: false,
      roleLoading: false,
      moduleLoading: false,
      roleForm: {
        rolE_ID: 0,
        rolE_NAME: '',
        fiX_ROLE_FLAG: 0,
        pym: '',
        wbm: '',
        iniT_SET_FLAG: 0,
        rolE_PERMISSION_ID: '',
        permissioN_TYPE: '',
        hospitaL_NO: '',
        remark: '',
        blncheck: true
      },
      moduleFormDefult: {
        sys_code: '',
        parent_id: '',
        modulE_ID: 0,
        modulE_NAME: '',
        modulE_CLASS_NAME: '',
        modulE_FILE_NAME: '',
        modulE_TYPE: '',
        status: 0,
        orderno: 0,
        remark: '',
        propertY1: '',
        propertY2: '',
        propertY3: '',
        createtime: '',
        createuser: '',
        blncheck: true
      },
      moduleForm: {},
      chooserDeptId: 0, // 当前选择科室ID
      synchrO_FLAG: 1, // 设置table1和table2关系的时候需要
      formLabelWidth: '120px',
      dialogtitle: '', // 弹出框标题
      dialogkind: 0,
      editType: '1',
      apiUrl: 'http://192.168.11.43:8077/opemr/AuthManagement/',
      search: '', // 搜索
      curHeight: 0
    }
  },
  created () {
    this.moduleForm = JSON.parse(JSON.stringify(this.moduleFormDefult))
    this.getTableDate1()
    this.getTableDate2()
    this.getTableDate3()
  },
  beforeMount (height) {
    var h = document.documentElement.clientHeight || document.body.clientHeight
    this.curHeight = h - 80 // 减去页面上固定高度height
  },
  methods: {
    // 获取表格数据
    getTableDate1 () {
      // 左边table
      $getTableD().then(res => {
        this.leftTableData = res
      })
    },
    getTableDate2 () {
      // 右上table
      $getTableR().then(res => {
        this.roleTableData = res
      })
    },
    getTableDate3 () {
      // 右下table
      $getTableM().then(res => {
        this.moduleTableData = res
      })
    },
    // 获取表格间关系table1和table2
    getRelationRole (deptCode) {
      $getRelationR(deptCode).then(res => {
        // rolE_ID
        let rowArr = []
        this.roleLoading = true
        for (let i = 0; i < res.length; i++) {
          for (let j = 0; j < this.roleTableData.length; j++) {
            if (this.roleTableData[j].rolE_ID === res[i].rolE_ID) {
              rowArr.push(this.roleTableData[j])
            }
          }
        }
        this.toggleSelection(rowArr, 1)
      })
    },
    // 获取表格间关系table2和table3
    getRelationModule (roleID) {
      $getRelationM(roleID).then(res => {
        // rolE_ID
        let rowArr = []
        this.moduleLoading = true
        for (let i = 0; i < res.length; i++) {
          for (let j = 0; j < this.moduleTableData.length; j++) {
            if (this.moduleTableData[j].modulE_ID === res[i].modulE_ID) {
              rowArr.push(this.moduleTableData[j])
            }
          }
        }
        this.toggleSelection(rowArr, 2)
      })
    },
    // 设置多选-table3
    toggleSelection (rows, index) {
      if (index === 1) {
        this.$refs.multipleTable.clearSelection()
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        }
        this.roleLoading = false
      } else if (index === 2) {
        this.$refs.roleTableRef.clearSelection()
        if (rows) {
          rows.forEach(row => {
            this.$refs.roleTableRef.toggleRowSelection(row)
          })
        }
        this.moduleLoading = false
      }
    },
    // 设置单选
    // setCurrent (row, index) {
    //   this.$refs.singleTable.setCurrentRow(row)
    //   if (index === 1) {
    //     this.chooserDeptId = row.depT_CODE
    //     this.synchrO_FLAG = row.synchrO_FLAG
    //     this.getRelationRole(row.depT_CODE)
    //   } else if (index === 2) {
    //     this.chooseRoleId = row.rolE_ID
    //     this.getRelationModule(row.rolE_ID)
    //   }
    // },
    // 右下表格 "状态" 项数据转换
    statusFormatter (row, column) {
      let datestatus = row.status
      if (datestatus && datestatus === 1) {
        return '启用'
      } else if (datestatus && datestatus === 2) {
        return '停用'
      }
      return ''
    },
    // table1当前行点击事件（单选），页面加载后设置默认行也走此方法
    leftTableChange (val) {
      this.chooserDeptId = val.depT_CODE
      this.synchrO_FLAG = val.synchrO_FLAG
      this.getRelationRole(val.depT_CODE)
      this.currentRow = val
    },
    // table2当前行点击事件（单选），页面加载后设置默认行也走此方法
    roleTableChange (val) {
      this.chooseRoleId = val.rolE_ID
      this.getRelationModule(val.rolE_ID)
    },
    // 点击新增
    addrole (val, kind) {
      this.dialogkind = kind
      this.editType = 2
      if (kind === 1) {
        this.roleForm.permissioN_TYPE = ''
        this.roleForm.rolE_ID = 0
        this.roleForm.rolE_NAME = ''
      } else if (kind === 2) {
        this.moduleForm = JSON.parse(JSON.stringify(this.moduleFormDefult))
      }
      this.dialogtitle = val
      this.dialogFormVisible = true
    },
    // 点击编辑
    editrole (val, row, kind) {
      this.dialogkind = kind
      this.editType = 1
      if (kind === 1) { // 角色table2
        this.roleForm.permissioN_TYPE = row.permissioN_TYPE
        this.roleForm.rolE_ID = row.rolE_ID
        this.roleForm.rolE_NAME = row.rolE_NAME
      } else if (kind === 2) { // 组件table3
        this.moduleForm = JSON.parse(JSON.stringify(this.moduleFormDefult))
        for (let i in this.moduleForm) {
          for (let j in row) {
            if (i === j) {
              this.moduleForm[i] = row[i]
            }
          }
        }
      }

      this.dialogtitle = val
      this.dialogFormVisible = true
    },
    // 弹出框提交事件
    formSubmit (val) {
      if (this.dialogkind === 1) { // 角色
        $addRole(this.roleForm).then(res => {
          if (res === true) {
            // 不刷新更新数据
            // this.roleTableData
            this.$message({
              message: '保存成功',
              type: 'success'
            })
            this.getTableDate2()
            // if (this.editType === 2) { // 新增
            //   this.roleTableData.push(this.roleForm)
            // } else if (this.editType === 1) { // 修改

            // }
          }
        })
      } else if (this.dialogkind === 2) { // 模块
        $addModule(this.moduleForm).then(res => {
          if (res === true) {
            // 不刷新更新数据
            // this.roleTableData
            this.$message({
              message: '保存成功',
              type: 'success'
            })
            this.getTableDate3()
          }
        })
      }
      this.dialogFormVisible = false
    },
    // table2复选框变化————设置角色部门关系
    handleSelectionChange (row) {
      let subRelRole = []
      let rowData = {
        // depT_ID: '',
        // rolE_ID: 0,
        // hospitaL_NO: '',
        // synchrO_FLAG: 0,
        // defaulT_ROLE_FLAG: 0
      }
      rowData.depT_ID = this.chooserDeptId
      rowData.synchrO_FLAG = this.synchrO_FLAG
      for (let i = 0; i < row.length; i++) {
        rowData.rolE_ID = row[i].rolE_ID
        rowData.hospitaL_NO = row[i].hospitaL_NO
        rowData.defaulT_ROLE_FLAG = row[i].defaulT_ROLE_FLAG || 0

        subRelRole.push(JSON.parse(JSON.stringify(rowData)))
      }

      $addRvsD(subRelRole).then(res => {
        if (res === true) {
          this.$message({
            message: '成功添加角色部门关系',
            type: 'success'
          })
        }
      })
    },
    // table3复选框变化————设置角色模块关系
    moduleSelectionChange (row) {
      let subRelmoudle = []
      let rowDataM = {
        // modulE_ID: 0,
        // rolE_ID: 0
      }
      rowDataM.rolE_ID = this.chooseRoleId
      for (let i = 0; i < row.length; i++) {
        rowDataM.modulE_ID = row[i].modulE_ID

        subRelmoudle.push(JSON.parse(JSON.stringify(rowDataM)))
      }

      $addRvsM(subRelmoudle).then(res => {
        if (res === true) {
          this.$message({
            message: '成功添加角色模块关系',
            type: 'success'
          })
        }
      })
    }
  },
  watch: {
    // 监听数据变化，列表加载后，设置默认选中第一行，table1部门
    tableSearch: function () {
      this.$nextTick(function () {
        this.$refs.singleTable.setCurrentRow(this.tableSearch[0])
        // this.getRelationModule('0')
      })
    },
    // 监听数据变化，列表加载后，设置默认选中第一行，table2角色
    roleTableData: function () {
      this.$nextTick(function () {
        /// ///方法
        console.log(this.roleTableData)
        this.$refs.multipleTable.setCurrentRow(this.roleTableData[0])
        // this.getRelationModule('0')
      })
    }
  },
  computed: {
    // 模糊搜索
    tableSearch () {
      const search = this.search
      if (search) {
        // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
        // 注意： filter() 不会对空数组进行检测 也 不会改变原始数组。
        return this.leftTableData.filter(data => {
          // some() 方法用于检测数组中的元素是否满足指定条件，会依次执行数组的每个元素：
          // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
          // 如果没有满足条件的元素，则返回false。
          // 注意： some() 不会对空数组进行检测 也 不会改变原始数组。
          return Object.keys(data).some(key => {
            // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
            // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
            return String(data[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      return this.leftTableData
    }
  }
}
</script>
<style scoped>
.content {
    margin-right: 64px;
}
.leftTable {
    width: 30%;
    margin-right:1%;
}
.rightTable{
    width: 69%;
}
.fl{
    float: left;
}
.tableContent{
  padding-top:10px;
  padding-bottom:10px;
}
.table{
  box-shadow: 0 0 3px 0 rgba(0,0,0,.1);
  background: #fff;
  border-radius: 5px;
}
.table2{
    height:50%;
    margin-bottom:1%
}
.el-form-item .el-input{
    width:85%;
}
.dialogFrm{
  overflow: scroll;
  height: 400px;
}
</style>
<style>
.content{
  background: #f7f7f7;
  overflow: hidden;
  width:100%;
}
</style>
