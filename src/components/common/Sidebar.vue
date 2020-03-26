<template>
    <div class="navDiv" :class="controlRetract?'v-leave-to':''">
        <div class="navHeader">
            <i class="navHeadIcon el-icon-s-fold" @click="closeNav"></i>
            <span class="navHeadTxt">模块</span>
        </div>
        <div class="navScrollDiv">
            <div class="navBlockDiv">
                <div class="navBlockLi" @click="checkurl('http://192.168.11.43:8022/',1)" data-url="">
                    <div class="navBlockLiImg">
                        <img src="https://dn-st.teambition.net/appstore/images/basic_app_members.png">
                    </div>
                    <p class="navBlockTxt">妇幼三期</p>
                </div>
                <div class="navBlockLi" @click="checkurl('http://192.168.11.43:8013/',1)" >
                    <div class="navBlockLiImg">
                      <img src="https://dn-st.teambition.net/appstore/images/basic_app_administration.png">
                    </div>
                    <p class="navBlockTxt">报表</p>
                </div>
                <div class="navBlockLi" @click="checkurl('http://192.168.11.43:8066/',1)" >
                    <div class="navBlockLiImg">
                      <img src="https://developer.teambition.com/reportapp/assets/logo.png">
                    </div>
                    <p class="navBlockTxt">档案管理</p>
                </div>
                <div class="navBlockLi" @click="checkurl('http://192.168.11.43:8015/',1)" >
                    <div class="navBlockLiImg">
                      <img src="https://striker.teambition.net/thumbnail/1119f87d6658f5dbea861daa17946aec29de/w/1024/h/1024">
                    </div>
                    <p class="navBlockTxt">产检计划</p>
                </div>
                <div class="navBlockLi" @click="checkurl('http://192.168.11.43:8012/',1)">
                    <div class="navBlockLiImg">
                      <img src="https://striker.teambition.net/thumbnail/11193f197529451ed9bce062893c821ea2e6/w/1024/h/1024">
                    </div>
                    <p class="navBlockTxt">上传统计</p>
                </div>
                <div class="navBlockLi" @click="checkurl('http://192.168.11.43:8090/',1)">
                    <div class="navBlockLiImg">
                      <img src="https://tcs.teambition.net/thumbnail/111o9200db4e71419ba5f4b5d61a064837ed/w/88/h/88">
                    </div>
                    <p class="navBlockTxt">妇幼平台</p>
                </div>
            </div>
            <div class="editNavBtnDiv">
                <el-button size="small">编辑应用侧栏</el-button>
            </div>
        </div>
        <div class="navBottomDiv">
            <a class="navBottomLi" @click="checkurl('/roleConfig',2)">
                <i class="el-icon-setting leftIcon"></i>
                <span>权限管理</span>
                <i class="fr el-icon-arrow-right"></i>
            </a>
            <a class="navBottomLi" @click="checkurl('/system',2)">
                <i class="el-icon-setting leftIcon"></i>
                <span>首页</span>
                <i class="fr el-icon-arrow-right"></i>
            </a>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import bus from 'common/js/bus';
export default {
    data () {
        return {
            controlRetract: false,
            navLists: [],
            showWay:''
        }
    },
    created () {
        this.getNavData()
        bus.$on('retract', res =>{
            this.controlRetract = res
            bus.$emit('isRetract', res)
        })
    },
    methods: {
        closeNav () {
          this.controlRetract = !this.controlRetract
          bus.$emit('retract', this.controlRetract)
        },
        checkurl (e, type) {
          console.log("2222")
          this.controlRetract = !this.controlRetract
          bus.$emit('retract', this.controlRetract)
          if(type===1){
            // window.location.href = e;
            window.open(e,'_blank') // 新窗口打开外链接
          }else{
            this.$router.push({path:e})
          }

        },
        handleOpen (key, keyPath) {
            console.log(key, keyPath)
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath)
        },
        getNavData () {
            this.$axios
                .get('static/api/all.json', {
                    // params: {
                    //   ID: 12345 // 可选
                    // }
                })
                .then((response) => {
                    this.navLists = response.data.list
                })
                .catch((error) => {
                    console.log(error)
                })
                .then(() => {
                    // always executed
                })
        }
    },
    computed: {
        onRoutes () {
            return this.$route.path.replace('/', '');
        }
    }
}
</script>
<style scoped>
.navHeader{
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    height: 48px;
    z-index: 10;
    padding: 16px 14px 12px 18px
}
.navHeadIcon{
    font-size: 20px;
    color: rgb(166, 166, 166);
    vertical-align: top;
    margin-right:10px;
    cursor: pointer;
}
.navHeadTxt{
    font-weight: bold;
}
.navScrollDiv{
    overflow-y: scroll;
    position:absolute;
    z-index:1;
    top:48px;
    left:0;
    bottom:81px;
    padding-bottom: 30px;
}
.navBlockDiv{
    display: -webkit-flex; /* Safari */
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
        padding: 16px 0 0 24px;
}
.navBlockLi{
    width: 92px;
    height: 92px;
    cursor: pointer;
    text-align: center;
    margin-bottom: 14px;
}
.navBlockLiImg{
    width: 44px;
    height: 44px;
    border-radius: 4px;
    display: inline-block;
    -webkit-box-shadow: 0 4px 16px 0 rgba(38,38,38,0.12);
    box-shadow: 0 4px 16px 0 rgba(38,38,38,0.12);
}
.navBlockLiImg img{
    width: 44px;
    height: 44px;
}
.navBlockTxt{
    margin: 4px auto 0;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.editNavBtnDiv{
    text-align: center;
}
.navBottomLi{
    width:100%;
    height:36px;
    line-height:36px;
    display: block;
    padding: 0 10px 0 20px;
}
.navBottomLi i{
    line-height: 36px;
    height: 36px;
    vertical-align: top;
    color: rgb(166, 166, 166);
}
.navBottomLi .leftIcon{
    font-size: 17px;
    margin-right:5px;
}
.navBottomDiv{
    border-top: 1px solid #F0F0F0;
    padding: 4px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: absolute;
    border-top: 1px solid #F0F0F0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    padding: 4px 0;
    left:0;
}
.navDiv {
    height: 100%;
    overflow: hidden;
    display: block;
    position: absolute;
    width:320px;
    z-index:100;
    left: 0;
    top: 0px;
    bottom: 0;
    background: #fff;
    border-radius: 4px;

    position: fixed!important;
    -webkit-animation: none;
    animation: none;
    -webkit-transition: all .33s cubic-bezier(0,1,.39,1);
    -o-transition: .33s all cubic-bezier(0,1,.39,1);
    transition: all .33s cubic-bezier(0,1,.39,1);
    -webkit-transform: translate(-100%);
    -ms-transform: translate(-100%);
    transform: translate(-100%);
}
.el-menu{
    border-right: none;
}
li {
    text-align: left;
}
.menuLi{
    margin-left:10px;
}
.el-menu-item.is-active{
    background: #1da57a !important;
}
.v-leave-to{
   -webkit-transform: none!important;
    -ms-transform: none!important;
    transform: none!important;

    -webkit-box-shadow: 0 12px 32px 0 rgba(38,38,38,.16);
    box-shadow: 0 12px 32px 0 rgba(38,38,38,.16);
  }
</style>
