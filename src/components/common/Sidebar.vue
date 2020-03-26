<template>
    <div class="navDiv" :class="controlRetract?'v-leave-to':''">
        <div class="navHeader">
            <i class="navHeadIcon el-icon-s-fold" @click="closeNav"></i>
            <span class="navHeadTxt">模块</span>
        </div>
        <div class="navScrollDiv">
            <div class="navBlockDiv">
                <div class="navBlockLi">
                    <div class="navBlockLiImg">
                        <img src="https://dn-st.teambition.net/appstore/images/basic_app_members.png">
                    </div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>

                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>

                <div class="navBlockLi">
                    <div class="navBlockLiImg"></div>
                    <p class="navBlockTxt">名称</p>
                </div>
            </div>
            <div class="editNavBtnDiv">
                <el-button size="small">编辑应用侧栏</el-button>
            </div>
        </div>
        <div class="navBottomDiv">
            <a class="navBottomLi">
                <i class="el-icon-setting leftIcon"></i>
                <span>企业管理</span>
                <i class="fr el-icon-arrow-right"></i>
            </a>
            <a class="navBottomLi">
                <i class="el-icon-setting leftIcon"></i>
                <span>企业管理</span>
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
    -webkit-box-shadow: 0 12px 32px 0 rgba(38,38,38,.16);
    box-shadow: 0 12px 32px 0 rgba(38,38,38,.16);

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
  }
</style>
