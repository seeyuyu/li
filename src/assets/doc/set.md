# 设置参数说明

表单动态渲染表单配置项
------------------------------------------------------

```javascript
formData: {
    required: false,
    formset:[{
        required: false,    // 是否必填,控制必填红色标的显隐 不进行表单验证 权重低于validate   -----  formData.false存在的情况非必填
        validate: {},       // 验证规则   ----- 非必填
        placeholder: "",    // 占位符   ----- 非必填
        name: "ID",         // 标识符
        title: "儿童保健号", // label 名
        type: "input",      // 类型 input、select、daterange日期范围、checkbox多选、rangeLabel组合标签、data时间选框、searchinput可搜索输入框
        options: [          // 标签类型为 checkbox、select、button 时需要
            {
                type: 'date',
                placeholder: "",
                name: 'name1',
                appendText: '至',
                col: 10,
                text:'提交' //提示文本 如 button 的文字
            }
        ],  // 选项
        splclass: "",       // 特殊类名
        value: "",          // 默认值
        br: true,           // 是否换行
        col: '24'           // 一列块中所占比例 24即为100%  不可设置跨列 跨列使用crosscol
        dateformat: 'yyyy-MM-dd', // 日期控件输出格式
        looplabel: [              // 多元素组件 数组
            {
                type: 'date',      // 标签类型
                placeholder: "",
                name: 'name1',
                appendText: '至',  // 标签后所跟文字
                col: 10            // 标签所占比例 <24
            },
            {
                type: 'date',
                placeholder: "",
                name: 'name2',
                appendText: '',
                col: 10
            }
        ],
        crosscol:'cross-col1'     // cross-col1 一列 cross-col2 两列   ----- 非必填
    }]
}
```
