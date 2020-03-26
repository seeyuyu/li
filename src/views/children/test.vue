<template>
    <!-- 出生缺陷 -->
    <div>
        <div ref="aa">
            <c-form v-bind:formData="formData"></c-form>
        </div>
        <div style="padding:15px;background:#fff;">
            <c-table :tableLis="tableLis"></c-table>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import CTable from 'components/common/table'
import CForm from 'components/common/form'
import bus from 'common/js/bus';

export default {
    data () {
        return {
            formData: {
                required: false,
                formset: [
                    {
                        validate:'name',
                        required: true,    //是否必填
                        placeholder: "保健号",    //占位符
                        name: "name",    //标识符
                        title: "儿童保健号",    //label名
                        type: "input",    //类型   1:input
                        options: [],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: true,    //是否换行
                    },
                    {
                        name: "cardId",    //标识符
                        title: "证件号码",    //label名
                        type: "radio",    //类型   1:input
                        options: [
                            {
                                name:'111',
                                value:'222'
                            },{
                                name:'333',
                                value:'444'
                            }
                        ],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                        crosscol:'cross-col2'
                    },
                    {
                        name: "phone",    //标识符
                        title: "",    //label名
                        type: "button",    //类型   1:input
                        options: [
                            {
                                type:'button',

                            },
                            {
                                type:'button',

                            }

                        ],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                    },
                    {
                        name: "phone",    //标识符
                        title: "电话",    //label名
                        type: "input",    //类型   1:input
                        options: [],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                    },
                    {
                        name: "phone",    //标识符
                        title: "儿童姓名",    //label名
                        type: "input",    //类型   1:input
                        options: [],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                    },
                    {
                        name: "cardplace",
                        title: "建卡单位",
                        type: "input",
                        options: [],
                        splclass: "",
                        value: "",
                        br: false,    //是否换行
                    },
                    {
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
                        col: 12
                    },
                    {
                        name: "cardId",    //标识符
                        title: "母亲身份证",    //label名
                        type: "input",    //类型   1:input
                        options: [],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                    },
                    {
                        name: "phone",    //标识符
                        title: "母亲姓名",    //label名
                        type: "input",    //类型   1:input
                        options: [],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                    },
                    {
                        name: "cardplace",
                        title: "居住地址",
                        type: "select",
                        options: [],
                        splclass: "",
                        value: "",
                        br: false,    //是否换行
                    },
                    {
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
                        ],
                        col: 12
                    },
                    {
                        name: "phone",    //标识符
                        title: " ",    //label名
                        type: "button",    //类型   1:input
                        options: [
                            {
                                type:'button',

                            },
                            {
                                type:'button',

                            }

                        ],    //选项
                        splclass: "",    //特殊类名
                        value: "",   //默认值
                        br: false,    //是否换行
                    },
                ],
            },

            tableLis: [
                {
                    name: 'name',
                    label: '调剂日期',
                    width: 120
                },
                {
                    name: 'province',
                    label: '调剂单位'
                },
                {
                    name: 'date',
                    label: '调剂单位',
                    width: 120
                },
                {
                    name: 'address',
                    label: '出生证起始编号',
                    width: 300
                },
                {
                    name: 'date',
                    label: '出生日期',
                    width: 120
                },
                {
                    name: 'province',
                    label: '数量'
                },
                {
                    name: 'city',
                    label: '登记人',
                    width: 120
                },
                {
                    name: 'address',
                    label: '状态',
                    width: 300
                }
            ]
        }
    },
    components: {
        CTable,
        CForm
    },
    mounted () {
        let screenHeight = document.documentElement.clientHeight || document.body.clientHeight
        let domHeight = screenHeight - this.$refs.aa.clientHeight - 180
        console.log("kokoo")
        console.log(domHeight)
        bus.$emit('domHeight', domHeight)
    }
}
</script>
