<template>
    <!-- 出生缺陷 -->
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
    data () {
        return {
            formData: {
                required: false,
                formset: [
                    {
                        required: true,
                        validate: "",
                        placeholder: "",
                        name: "cardplace",
                        title: "填表单位",
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
                        title: "填表日期",
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
                        title: "儿童姓名",
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
                        title: "儿童保健号",
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
                        title: "出生日期",
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
                        name: "name",
                        title: "上报日期",
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
                        title: "状态",
                        type: "select",
                        options: [],
                        splclass: "",
                        value: "",
                        br: false, //是否换行
                        col: 24
                    },
                    {
                        name: "phone",    //标识符
                        title: "",    //label名
                        type: "button",    //类型   1:input
                        options: [
                            {
                                type: 'button',
                                text: '查询'

                            },
                            {
                                type: 'button',
                                text: '待登记'
                            }
                        ],    //选项
                        splclass: "", //特殊类名
                        value: "",    //默认值
                        br: false,    //是否换行
                    },
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
