<template>
    <el-table
        :data="tableData"
        style="width: 100%"
        v-if="tableLis"
        :height="domHeight"
    >
        <el-table-column
            v-for="(item, index) in tableLis"
            :prop="item.name"
            :label="item.label"
            :key="index"
            :width="item.width"
            :fixed="item.fixed? item.fixed : false"
        ></el-table-column>
        <el-table-column
            label="操作"
            fixed="right"
            height="200"
        >
            <template slot-scope="scope">
                <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small"
                >
                    操作
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
/* eslint-disable */
import bus from 'common/js/bus'

export default {
    methods: {
        deleteRow (index, rows) {
            rows.splice(index, 1);
        }
    },
    props:["tableLis"],
    data () {
        return {
            domHeight:'260',
            tableData: [
                {
                    date: '2019-12-12',
                    name: '演示',
                    province: '省份',
                    city: '市区',
                    address: '演示地址',
                    zip: 200333
                }, {
                    date: '2019-12-12',
                    name: '演示',
                    province: '省份',
                    city: '市区',
                    address: '演示地址',
                    zip: 200333
                },
                {
                    date: '2019-12-12',
                    name: '演示',
                    province: '省份',
                    city: '市区',
                    address: '演示地址',
                    zip: 200333
                }
            ]
        }
    },
    // created(){
    //     console.log("11")
    //     // this.domHeight = inTimeDomHeight()
    // },
    mounted(){console.log("22")},
    // computed:{
    //   inTimeDomHeight: function(){
    //     return this.domHeight
    //   }
    // },
    created(){
        bus.$on('domHeight', res =>{
          console.log("jk")
          console.log(res)
            this.domHeight = res
            console.log(this.domHeight)
        })
    }
}
</script>
<style>
.el-table td {
    padding:  5px 0;
    line-height: 22px;
    height: 22px;
}
 .el-table th{
    padding:8px 0;
    line-height: 22px;
}

/* .el-table{
    height:100%;
}
.el-table__body-wrapper{
    height:83%;
} */
</style>
