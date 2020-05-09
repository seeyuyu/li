<template>
  <div class="content">
    <div class="leftBody">
    <!-- <div class="width25 fl"> -->
      <div class="leftDiv">
        <div class="leftDivLi leftDivLiAct">
          <i class="el-icon-s-home navIcon"></i><span>首页</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我执行的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我参与的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我创建的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>首页</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我执行的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我参与的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我创建的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>首页</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我执行的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我参与的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我创建的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我参与的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我创建的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>首页</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我执行的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我参与的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我创建的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>首页</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我执行的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我参与的</span>
        </div>
        <div class="leftDivLi">
          <i class="el-icon-s-home navIcon"></i><span>我创建的</span>
        </div>
      </div>
    <!-- </div> -->
    </div>
    <div class="rightBody">
      <div>
        <div>暂无数据{{name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from 'common/js/store'
export default {
  data () {
    return {

    }
  },
  computed: {
    name () {
      return store.name
    }
  },
  beforeMount (height) {
    var h = document.documentElement.clientHeight || document.body.clientHeight
    this.curHeight = h - 50 // 减去页面上固定高度height
  }
}
</script>
<style scoped>
.leftBody{
    overflow-y: scroll;
    position: absolute;
    top: 50px;
    bottom: 0px;
    width: 19%;
    z-index: 20;
}
.leftDiv{
  width:200px;
  padding-top:40px;
}
.leftDivLi{
  cursor: pointer;
  height: 40px;
  padding: 10px 16px;
  border-radius: 3px;
}
.leftDivLiAct{
  background: rgba(27,154,238,0.1);
}
.leftDivLi:hover{
  background: #f6f6f6;
}
.navIcon{
  font-size: 18px;
  margin-right: 12px;
  vertical-align: top;
  color: #8c8c8c;
}
.leftDivLiAct .navIcon{
  color:#1b9aee;
}
.width25{
  width:25%;
  height:100%;
}
.width100{
  width:100%;
}
.rightBody{
  padding-top:40px;
  padding-left:25%;
  position: absolute;
  bottom: 0px;
  top: 50px;
  left:0px;
  overflow: scroll;
  width: 100%;
}
</style>
<style>
html{
  min-width: 1100px;
  /* overflow: scroll; */
}
.content{
  background: #fff;
}
</style>
