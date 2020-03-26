// 表单验证规则
const formRules = {
  name: [{
    required: true,
    message: '请输入活动名称',
    trigger: 'blur'
  },
  {
    min: 3,
    max: 5,
    message: '长度在 3 到 5 个字符',
    trigger: 'blur'
  }
  ],
  tel: [{
    type: 'number',
    message: '请正确输入电话',
    trigger: 'blur'
  }],
  region: [{
    required: true,
    message: '请选择活动区域',
    trigger: 'change'
  }],
  date1: [{
    type: 'date',
    required: true,
    message: '请选择日期',
    trigger: 'change'
  }],
  date2: [{
    type: 'date',
    required: true,
    message: '请选择时间',
    trigger: 'change'
  }],
  type: [{
    type: 'array',
    required: true,
    message: '请至少选择一个活动性质',
    trigger: 'change'
  }],
  resource: [{
    required: true,
    message: '请选择活动资源',
    trigger: 'change'
  }],
  desc: [{
    required: true,
    message: '请填写活动形式',
    trigger: 'blur'
  }]
}
export default formRules

// Type
//   string：必须为类型string。This is the default type.
//   number：必须为类型number。
//   boolean：必须为类型boolean。
//   method：必须为类型function。
//   regexp：必须是RegExp创建新时不会产生异常的的实例或字符串RegExp。
//   integer：必须为类型number且为整数。
//   float：必须为类型，number并且为浮点数。
//   array：必须是由决定的数组Array.isArray。
//   object：必须是类型，object而不是Array.isArray。
//   enum：值必须存在于中enum。
//   date：值必须由 Date
//   url：必须为类型url。
//   hex：必须为类型hex。
//   email：必须为类型email。
//   any：可以是任何类型。
// Required
// Pattern
//   该pattern规则属性指示一个正则表达式的值必须匹配，才能通过验证。
// Range
//    范围是使用min和max属性定义的。针对string和与array类型进行比较length，对于number类型，数字不得小于min或大于max。
// Length
//   要验证字段的确切长度，请指定len属性。对属性进行string和array类型比较length，对于该number类型，此属性表示与的完全匹配number，即它只能严格等于len。
//   如果该len属性与min和max范围属性结合使用，len则优先
// Enumerable
// Whitespace
//  通常将仅包含空格的必填字段视为错误
// Deep Rules
// defaultField
// Transform
// Messages
// asyncValidator
// validator
