<template>
    <div class="header">
        <div class="header-left">
            <!-- 折叠按钮 -->
            <div
                class="collapse-btn"
                @click="retractCheck"
            >
                <i class="el-icon-s-unfold"></i>
            </div>
            <div class="logo">妇幼专科</div>
        </div>
        <div class="header-right">
            <div class="header-user-con">
                <!-- 全屏显示 -->
                <div
                    class="btn-fullscreen"
                    @click="handleFullScreen"
                >
                    <el-tooltip
                        effect="dark"
                        :content="fullscreen?`取消全屏`:`全屏`"
                        placement="bottom"
                    >
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown
                    class="user-name"
                    trigger="click"
                    @command="handleCommand"
                >
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a
                            href=""
                            target="_blank"
                        >
                            <!-- <el-dropdown-item>项目仓库</el-dropdown-item> -->
                        </a>
                        <!-- divided 属性 加横线 -->
                        <el-dropdown-item
                            command="loginout"
                        >退出登录</el-dropdown-item>
                        <!-- <el-dropdown-item
                            divided
                            command="loginout"
                        >退出登录</el-dropdown-item> -->
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import bus from 'common/js/bus'
export default {
    data () {
        return {
            retract: false,
            fullscreen: false,
            name: '测试',
            message: 2
        }
    },
    computed: {
        username () {
            let username = localStorage.getItem('ms_username')
            return username || this.name
        }
    },
    methods: {
        // 用户名下拉菜单选择事件
        handleCommand (command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username')
                this.$router.push('/login')
            }
        },
        // 侧边栏折叠
        retractCheck () {
            bus.$on('retract', res =>{
                this.retract = res
            })
            this.retract = !this.retract
            bus.$emit('retract', this.retract)
        },
        // 全屏事件
        handleFullScreen () {
            let element = document.documentElement
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen()
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen()
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen()
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen()
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen()
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen()
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen()
                }
            }
            this.fullscreen = !this.fullscreen
        }
    },
    mounted () {
        if (document.body.clientWidth < 1500) {
            // this.retractCheck()
        }
    }
}
</script>
<style scoped>
.header {
    position: relative;
    width: 100%;
    height: 48px;
    font-size: 18px;
    background: #fff;
    -webkit-box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
    box-shadow: 0 0 8px 0 rgba(0,0,0,.1); 
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 50px;
}
.header .logo {
    float: left;
    width: 250px;
    line-height: 50px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 50px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}

</style>
