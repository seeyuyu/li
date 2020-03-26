<template>
  <!-- 双向转诊 -->
  <div>
    <c-form v-bind:formData="formData"></c-form>
    <div style="padding:15px;background:#fff;">
      <c-table :tableLis="tableLis"></c-table>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import CTable from "components/common/table";
import CForm from "components/common/form";

export default {
  data() {
    return {
      formData: {
        required: false,
        formset: [
          {
            required: false,
            validate: "",
            placeholder: "",
            name: "cardplace",
            title: "转出单位",
            type: "select",
            options: [],
            splclass: "",
            value: "",
            br: false, //是否换行
            col: 24
          },
          {
            required: false,
            validate: "",
            placeholder: "",
            name: "name",
            title: "转出日期",
            type: "daterange",
            options: [],
            splclass: "",
            value: "",
            br: false, //是否换行
            dateformat: "yyyy-MM-dd",
            looplabel: [
              {
                type: "date",
                placeholder: "",
                name: "name1",
                appendText: "至",
                col: 10
              },
              {
                type: "date",
                placeholder: "",
                name: "name2",
                appendText: "",
                col: 10
              }
            ],
            col: 12
          },
          {
            required: false,
            validate: "",
            placeholder: "",
            name: "cardplace",
            title: "姓名",
            type: "input",
            options: [],
            splclass: "",
            value: "",
            br: false, //是否换行
            col: 24
          },
          {
            required: false,
            validate: "",
            placeholder: "",
            name: "cardplace",
            title: "保健号",
            type: "select",
            options: [],
            splclass: "",
            value: "",
            br: false, //是否换行
            col: 24
          },
          {
            required: false,
            validate: "",
            placeholder: "",
            name: "cardplace",
            title: "转入单位",
            type: "input",
            options: [],
            splclass: "",
            value: "",
            br: false, //是否换行
            col: 24
          },
          {
            required: false,
            validate: "",
            placeholder: "",
            name: "name",
            title: "转入日期",
            type: "daterange",
            options: [],
            splclass: "",
            value: "",
            br: false, //是否换行
            dateformat: "yyyy-MM-dd",
            looplabel: [
              {
                type: "date",
                placeholder: "",
                name: "name1",
                appendText: "至",
                col: 10
              },
              {
                type: "date",
                placeholder: "",
                name: "name2",
                appendText: "",
                col: 10
              }
            ],
            col: 12
          },
          {
            required: false,
            validate: "",
            placeholder: "",
            name: "cardplace",
            title: "证件号码",
            type: "input",
            options: [],
            splclass: "",
            value: "",
            br: false, //是否换行
            col: 24
          },
          {
            required: false,
            validate: "",
            placeholder: "",
            name: "cardplace",
            title: "电话",
            type: "input",
            options: [],
            splclass: "",
            value: "",
            br: false, //是否换行
            col: 24
          },
          {
            required: false,
            validate: "",
            placeholder: "",
            name: "cardplace",
            title: "转诊状态",
            type: "select",
            options: [],
            splclass: "",
            value: "",
            br: false, //是否换行
            col: 24
          },
          {
            required: false,
            validate: "",
            placeholder: "",
            name: "cardplace",
            title: "业务类型",
            type: "select",
            options: [],
            splclass: "",
            value: "",
            br: false, //是否换行
            col: 24
          },
          {
            required: false,
            validate: "",
            placeholder: "",
            name: "cardplace",
            title: "转入科室",
            type: "select",
            options: [],
            splclass: "",
            value: "",
            br: false, //是否换行
            col: 24
          }
        ]
      },
      tableLis: [
        {
          name: "name",
          label: "调剂日期",
          width: 120
        },
        {
          name: "province",
          label: "被调剂单位",
          width: 130
        },
        {
          name: "date",
          label: "调剂单位",
          width: 120
        },
        {
          name: "address",
          label: "出生证起始编号",
          width: 300
        },
        {
          name: "date",
          label: "出生日期",
          width: 120
        },
        {
          name: "province",
          label: "数量"
        },
        {
          name: "city",
          label: "登记人",
          width: 120
        },
        {
          name: "address",
          label: "状态",
          width: 300
        }
      ]
    };
  },
  components: {
    CTable,
    CForm
  }
};
</script>
