<template>
    <div v-if="tagsArr.length > 0">
        <div class="tagsDiv">
            <div class="wid">
            <router-link
                v-for="(tag, index) in tagsArr"
                :to="tag.path"
                :key="index"
            >
                <el-tag
                    closable
                    size="medium"
                    @close="closeView($event, index)"
                    :type="actived(tag.path) ?'':'info'"
                >{{tag.name}}</el-tag>
            </router-link>
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
            tagsArr: []
        }
    },
    created () {
        // console.log(this.$route)
        this.getTags(this.$route)
    },
    methods: {
        // 1.打开页面
        // 2.判断tagsArr是否有当前页对应的标签  有 ——> 对应标签高亮, 没有 ——> 新增标签
        getTags (route) {
            // console.log(route.fullPath)
            const hasTag = this.tagsArr.some(item => {
                return item.path === route.fullPath;
            })
            if (!hasTag) {
                // 新增标签
                // console.log(this.tagsArr)
                // route.hash
                this.tagsArr.push({
                    path: route.fullPath,
                    name: route.name,
                    title: route.meta.title,
                })
                // console.log(this.tagsArr)
            }
            bus.$emit('openedTags', this.tagsArr);
        },
        // 关闭标签
        closeView (res, index) {
            // 1.从tags数组中删除当前元素
            // 2.判断是否有上一标签 有 ——>显示上衣标签页 ，没有 ——> 打开默认页'/' 
            const delItem=this.tagsArr.splice(index, 1)[0]
            const item = this.tagsArr[index] ? this.tagsArr[index] : this.tagsArr[index - 1]
            if(item){
                 delItem.path === this.$route.fullPath && this.$router.push(item.path);
            } else {
                this.$router.push('/')
            }
        },
        routeTo () {
            const fullPath = this.$route.fullPath
        },
        // 判断添加高亮
        actived (path) {
            return path === this.$route.fullPath
        }
    },
    watch:{
        $route(newValue, oldValue){
            // console.log(newValue)
            // console.log(oldValue)
            this.getTags(newValue)
        }
    }
}
</script>
<style scoped>
.tagsDiv {
    background: #fff;
    width: 100%;
    padding: 5px 25px;
    border-top: 1px solid #d8dce5;
    border-bottom: 1px solid #d8dce5;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    overflow: hidden;
}
.el-tag.el-tag {
    margin-right: 5px;
}
.wid{
    width:3000px;
}
</style>
