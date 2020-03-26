<template>
    <div>
        <el-col :span="loopData.col">
            <!-- input start -->
            <el-input
                v-if="loopData.type === 'input'"
                :placeholder="loopData.placeholder"
                :name="loopData.name"
            ></el-input>
            <!-- search input start -->
            <el-autocomplete
                v-if="loopData.type === 'searchinput'"
                class="inline-input"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect"
            ></el-autocomplete>
            <!-- data start -->
            <el-date-picker
                v-if="loopData.type === 'date'"
                type="date"
                :placeholder="loopData.placeholder"
                :value-format="loopData.dateformat"
                prefix-icon='sa'
            >
            </el-date-picker>
            <!-- select start -->
            <el-select
                v-if="loopData.type === 'select'"
                :placeholder="loopData.placeholder"
                v-model="loopData.value"
            >
                <!-- v-for 的优先级比 v-if 高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。 -->
                <el-option
                    v-for="(option, index) in loopData.options"
                    :key="index"
                    :label="option.title"
                    :value="option.value"
                ></el-option>
            </el-select>
        </el-col>
        <el-col class="txtCenter"  :span="24-2*Number(loopData.col)" v-if="loopData.appendText!=''">{{loopData.appendText}}</el-col>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    data () {
        return {

        }
    },
    props: ["loopData"],
    created () {
        console.log("!!!!")
    }
}
</script>
<style scoped>
.el-input--prefix .el-input__inner{
    padding-left:15px;
}
</style>
