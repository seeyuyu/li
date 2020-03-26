<template>
  <div class="ovh">
    <div class="leftDiv fl">
      <div class="leftDivLi leftDivLiAct">
        <i class="el-icon-s-home navIcon"></i><span>首页</span></div>
      <div class="leftDivLi">
        <i class="el-icon-s-home navIcon"></i><span>我执行的</span></div>
      <div class="leftDivLi">
        <i class="el-icon-s-home navIcon"></i><span>我参与的</span></div>
      <div class="leftDivLi">
        <i class="el-icon-s-home navIcon"></i><span>我创建的</span></div>
    </div>
    <div class="rightBody">
      <div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.leftDiv{
  width:200px;
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
</style>
<style>
.content{
  background: #fff;
}
</style>
