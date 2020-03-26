<template>
    <!-- 儿童建卡 -->
    <div>
        <c-form v-bind:formData="formData"></c-form>
        <div style="padding:15px;background:#fff;">
            <c-table :tableLis="tableLis"></c-table>
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
            formData: {
                required: false,
                formset: [
                    {
                        validate: '',
                        placeholder: "",    //占位符
                        name: "ID",    //标识符
                        title: "儿童保健号",    //label名
                        type: "input",    //类型   1:input
                        options: [],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: true,    //是否换行
                    },
                    {
                        validate: '',
                        placeholder: "",    //占位符
                        name: "cardId",    //标识符
                        title: "证件号码",    //label名
                        type: "input",    //类型   1:input
                        options: [],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                    },
                    {
                        validate: '',
                        placeholder: "",    //占位符
                        name: "phone",    //标识符
                        title: "电话",    //label名
                        type: "input",    //类型   1:input
                        options: [],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                    },
                    {
                        validate: '',
                        placeholder: "",    //占位符
                        name: "phone",    //标识符
                        title: "儿童姓名",    //label名
                        type: "input",    //类型   1:input
                        options: [],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                    },
                    {
                        validate: '',
                        placeholder: "",
                        name: "cardplace",
                        title: "建卡单位",
                        type: "input",
                        options: [],
                        splclass: "",
                        value: "",
                        br: false,    //是否换行
                    },
                    {
                        validate: '',
                        placeholder: "选择日期",
                        name: "name",
                        title: "建卡日期",
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
                                col: 10
                            }
                        ],
                    },
                    {
                        validate: '',
                        placeholder: "",    //占位符
                        name: "cardId",    //标识符
                        title: "母亲身份证",    //label名
                        type: "input",    //类型   1:input
                        options: [],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                    },
                    {
                        validate: '',
                        placeholder: "",    //占位符
                        name: "phone",    //标识符
                        title: "母亲姓名",    //label名
                        type: "input",    //类型   1:input
                        options: [],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                    },
                    {
                        validate: '',
                        placeholder: "",
                        name: "cardplace",
                        title: "居住地址",
                        type: "select",
                        options: [],
                        splclass: "",
                        value: "",
                        br: false,    //是否换行
                    },
                    {
                        validate: '',
                        placeholder: "",
                        name: "name",
                        title: "出生日期",
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
                                col: 10
                            }
                        ]
                    }
                ]            
                },
            tableLis: [
                {
                    name: 'name',
                    label: '姓名',
                    width: 120
                },
                {
                    name: 'province',
                    label: '省份'
                },
                {
                    name: 'date',
                    label: '市区',
                    width: 120
                },
                {
                    name: 'address',
                    label: '地址',
                    width: 300
                },
                {
                    name: 'date',
                    label: '时间',
                    width: 120
                },
                {
                    name: 'province',
                    label: '省份'
                },
                {
                    name: 'city',
                    label: '市区',
                    width: 120
                },
                {
                    name: 'address',
                    label: '地址',
                    width: 300
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
