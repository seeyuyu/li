<template>
    <!-- 儿童建卡 -->
    <div>
        <c-form v-bind:formData="formData"></c-form>
        <div style="padding:15px;background:#fff;">
            <c-table></c-table>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import CTable from 'components/common/table'
import CForm from 'components/common/form'

export default {
    data () {
        return {
            formData: [
                {
                    required: false,    //是否必填
                    validate: {},
                    placeholder: "",    //占位符
                    name: "ID",    //标识符
                    title: "儿童保健号",    //label名
                    type: "input",    //类型   1:input
                    options: [],    //选项
                    splclass: "disblock",    //特殊类名
                    value: "",   //默认值
                    br: true,    //是否换行
                    col:'24'
                },
                {
                    required: false,    //是否必填
                    validate: {},
                    placeholder: "",    //占位符
                    name: "cardId",    //标识符
                    title: "证件号码",    //label名
                    type: "input",    //类型   1:input
                    options: [],    //选项
                    splclass: "",    //特殊类名
                    value: "",   //默认值
                    br: false,    //是否换行
                    col:'24'
                },
                {
                    required: false,
                    validate: {},
                    placeholder: "选择日期",
                    name: "name",
                    title: "时间范围",
                    type: "daterange",
                    options: [],
                    splclass: "",
                    value: "",
                    br: false,    //是否换行
                    dateformat: 'yyyy-MM-dd',
                    looplabel: [
                        {
                            type: 'date',
                            placeholder: "",
                            name: 'name1',
                            appendText: '至',
                            col: 10
                        },
                        {
                            type: 'date',
                            placeholder: "",
                            name: 'name2',
                            appendText: '',
                            col:10
                        }
                    ],
                    col:'12'
                },
                {
                    required: false,
                    validate: {},
                    placeholder: "选择日期",
                    name: "name",
                    title: "时间范围",
                    type: "daterange",
                    options: [],
                    splclass: "",
                    value: "",
                    br: false,    //是否换行
                    dateformat: 'yyyy-MM-dd',
                    looplabel: [
                        {
                            type: 'date',
                            placeholder: "",
                            name: 'name1',
                            appendText: '至',
                            col: 10
                        },
                        {
                            type: 'date',
                            placeholder: "",
                            name: 'name2',
                            appendText: '',
                            col:10
                        }
                    ],
                    col:'12'
                },
                {
                    required: false,    //是否必填
                    validate: {
                        isvalidate: true,
                        validatefield: {},
                        validatename: 'tel'
                    },
                    placeholder: "",    //占位符
                    name: "tel",    //标识符
                    title: "电话",    //label名
                    type: "input",    //类型   1:input
                    options: [],    //选项
                    splclass: "",    //特殊类名
                    value: "",   //默认值
                    br: true,    //是否换行
                    col:'24'
                },
                {
                    required: false,
                    validate: {},
                    placeholder: "",
                    name: "name",
                    title: "儿童姓名",
                    type: "input",
                    options: [],
                    splclass: "",
                    value: "",
                    br: false,    //是否换行
                    col:'24'
                },
                {
                    required: false,
                    validate: {},
                    placeholder: "",
                    name: "cardplace",
                    title: "建卡单位",
                    type: "input",
                    options: [],
                    splclass: "",
                    value: "",
                    br: false,    //是否换行
                    col:'24'
                },
                {
                    required: false,
                    validate: {},
                    placeholder: "选择日期",
                    name: "name",
                    title: "建卡日期",
                    type: "date",
                    options: [],
                    splclass: "",
                    value: "",
                    br: false,    //是否换行
                    dateformat: 'yyyy-MM-dd',
                    col:'24'
                },
                {
                    required: false,
                    validate: {},
                    placeholder: "儿童姓名",
                    name: "name",
                    title: "儿童姓名",
                    type: "checkbox",
                    options: [{
                        title: "这是一个option1",
                        name: "name1",
                        value: "value1"
                    },
                    {
                        title: "这是一个默认值吖",
                        name: "name2",
                        value: "value2"
                    },
                    {
                        title: "这是一个option3",
                        name: "name3",
                        value: "value3"
                    }],
                    splclass: "",
                    value: "这是一个默认值吖1",
                    br: false,    //是否换行
                    col:'24'
                },
                {
                    required: true,
                    validate: {
                        isvalidate: true,
                        validatefield: {}
                    },
                    placeholder: "请输入2",
                    name: "name2",
                    title: "姓名2",
                    type: "select",
                    splclass: "qw",
                    value: "value2",
                    options: [
                        {
                            title: "这是一个option1",
                            name: "name1",
                            value: "value1"
                        },
                        {
                            title: "这是一个默认值吖",
                            name: "name2",
                            value: "value2"
                        },
                        {
                            title: "这是一个option3",
                            name: "name3",
                            value: "value3"
                        }
                    ],
                    br: false,
                    col:'24'
                },
                {
                    required: true, //是否必填
                    validate: {
                        //验证规则
                        isvalidate: true,
                        validatefield: {}
                    },
                    placeholder: "请输入", //占位符
                    name: "name", //标识符
                    title: "姓名", //label名
                    type: "input", //类型   1:input
                    options: [], //选项
                    splclass: "qw", //特殊类名
                    value: "这是一个默认值吖", //默认值
                    br: false,
                    col:'24'
                },
                {
                    required: true,
                    validate: {
                        isvalidate: true,
                        validatefield: {}
                    },
                    placeholder: "请输入1",
                    name: "name1",
                    title: "姓名1",
                    type: "input",
                    options: [],
                    splclass: "qw",
                    value: "这是一个默认值吖1",
                    ifRender (form) {
                        return form.instant == false;
                    },
                    br: false,
                    col:'24'
                }
            ]
        }
    },
    components: {
        CTable,
        CForm
    }
}
</script>
