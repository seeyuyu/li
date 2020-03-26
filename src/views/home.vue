<template>
    <div class="wrapper">
        <c-sidebar v-show="headShow"></c-sidebar>
        <div class="content-box">
            <c-header v-show="headShow"></c-header>
            <!-- <c-tags v-show="headShow"></c-tags> -->
            <div class="content">
                <keep-alive :include="tagsArr">
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import bus from 'common/js/bus'
import CHeader from 'components/common/Header'
import CSidebar from 'components/common/Sidebar'
import CTags from 'components/common/Tags'

export default {
    data () {
        return {
            path:'',
            tagsArr: [],
            deployment: true,  //false为菜单展开
            headShow: true
        }
    },
    components: {
        CHeader,
        CSidebar,
        CTags
    },
    created () {
        bus.$on('isRetract', res =>{
            this.deployment = res
        })
        bus.$on('openedTags', res =>{
            this.tagsArr = res
        });
    },
    mounted () {
        console.log(this.$route)
        this.path = this.$route.path
        this.headShow = this.$route.meta.headShow
    },
    watch:{
        $route(to, form) {
            this.path = to.path
        }
    }
}
</script>
<style>
.content{
  padding: 40px;
}
</style>
