<template>
  <el-form
    :inline="true"
    class="formDiv"
    label-position="right"
    label-width="100px"
    size="mini"
    :rules="rules"
    :model="searchForm"
    ref="searchForm"
  >
    <el-form-item
      v-for="(item,index) in formData.formset"
      :key="index"
      :label="item.title"
      :required=" item.required || formData.required"
      :prop="item.validate?item.validate:''"
      :class="item.splclass"
    >
      <el-col :span="item.col?item.col:24">
        <!-- input start -->
        <el-input
          v-if="item.type === 'input'"
          :placeholder="item.placeholder?item.placeholder:''"
          :name="item.name"
          v-model="searchForm[item.name]"
        ></el-input>
        <!-- search input start -->
        <el-autocomplete
          v-if="item.type === 'searchinput'"
          class="inline-input"
          v-model="searchForm.name"
          :fetch-suggestions="querySearch"
          :placeholder="item.placeholder?item.placeholder:''"
          @select="handleSelect"
        ></el-autocomplete>
        <!-- data start -->
        <el-date-picker
          v-if="item.type === 'date'"
          v-model="searchForm.date"
          type="date"
          :placeholder="item.placeholder?item.placeholder:''"
          :value-format="item.dateformat"
        >
        </el-date-picker>
        <!-- select start -->
        <el-select
          v-if="item.type === 'select'"
          :placeholder="item.placeholder?item.placeholder:''"
          v-model="item.value"
        >
          <!-- v-for 的优先级比 v-if 高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。 -->
          <el-option
            v-for="(option, index) in item.options"
            :key="index"
            :label="option.title"
            :value="option.value"
          ></el-option>
        </el-select>
        <!-- checkbox -->
        <el-checkbox-group
          v-if="item.type === 'checkbox'"
          v-model="searchForm.type"
        >
          <!-- v-model的值需要与 el-form-item 的:prop值一样 -->
          <el-checkbox
            v-for="(option, index) in item.options"
            :key="index"
            :label="option.title"
            :value="option.value"
            :name="option.name"
          ></el-checkbox>
        </el-checkbox-group>
        <!-- 单选框 -->
        <el-radio-group v-model="formData" v-if="item.type === 'radio'" :class="item.crossCol || ''">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
        <!-- 时间范围 -->
        <el-date-picker
          v-if="item.type === 'daterange'"
          v-model="searchForm.daterange"
          type="daterange"
          range-separator="至"
          :start-placeholder="item.looplabel[0].placeholder"
          :end-placeholder="item.looplabel[1].placeholder"
          prefix-icon='no'
        >
        </el-date-picker>
        <!-- 组合标签 -->
        <div v-if="item.type === 'rangeLabel'">
          <c-range
            v-for="(items, index) in item.looplabel"
            :loopData="items"
            :key="index"
          ></c-range>
        </div>
        <!-- button -->
        <div v-if="item.type === 'button'" :class="item.title==''?'formBtnDiv':''">
          <el-button v-for="(items, index) in item.options" :key="index" type="primary" @click="submitForm('searchForm')">{{ items.text }}</el-button>
        </div>
      </el-col>
    </el-form-item>
    <!-- <el-col>
            <el-form-item label="活动时间">
                <el-col :span="5">
                    <el-date-picker
                        type="date"
                        placeholder="开始"
                        v-model="formData"
                        style="width: 100%;"
                    ></el-date-picker>
                </el-col>
                <el-col
                    class="line"
                    :span="2"
                >-</el-col>
                <el-col :span="5">
                    <el-date-picker
                        type="date"
                        placeholder="结束"
                        v-model="formData"
                        style="width: 100%;"
                    ></el-date-picker>
                </el-col>
            </el-form-item>
        </el-col> -->
    <!-- <el-form-item label="特殊资源">
            <el-radio-group v-model="formData">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
        </el-form-item> -->
    <!-- <el-form-item>
            <el-button
                type="primary"
                @click="onSubmit"
            >查询</el-button>
        </el-form-item> -->
  </el-form>

</template>
<script>
/* eslint-disable */
import formRules from "common/js/formRules"; //验证规则
import CRange from "components/formParts/RangeLabel";
// import Daterange from 'components/formParts/Daterange'

export default {
  data() {
    return {
      searchForm: {},
      rules: formRules,
      restaurants: [],
      state1: "",
      state2: ""
    };
  },
  components: {
    CRange
  },
  props: ["formData"],
  methods: {
    onSubmit(res) {
      console.log(res);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号"
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层"
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号"
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号"
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部"
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室"
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼"
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    // 点击提交
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>
<style>
/* 时间范围样式 */
.el-date-editor--daterange .el-range__icon {
  display: none;
}
/* .el-date-editor--daterange .el-range__close-icon {
  display: none;
} */
/* .el-date-editor .el-range-input {
  width: 43%;
} */
.el-date-editor--daterange.el-input__inner {
  width: 179px;
}
.el-date-editor .el-range-separator {
  width: 12%;
}
.el-range-editor.el-input__inner{
  padding: 3px 0px 3px 10px;
}
.formBtnDiv{
    width: 277px;
    padding-left: 34px;
}
</style>
