# 产品管理组件使用说明

本地开发组件，建议使用npm run storybook启动


## 安装并引入组件
```
npm install comm-utils -S

import commUtils from "comm-utils";
```

## 数组-字符串转换方法
```
/*
将传入数据转换成数组并返回, separa：截取分隔符，默认“,”分割（可选）
*/
let resStr = commUtils.checkTypeBackArray(str, separa)
```
| 输入 | 输出 |
| --------- | --------- |
| commUtils.checkTypeBackArray('1,2,3,4')| ["1","2","3","4"]
| commUtils.checkTypeBackArray("1;2;3;4", ";")| ["1","2","3","4"]
```
/*
将传入数据转换成字符串并返回, separa：截取分隔符，默认“,”拼接（可选）
*/
let resArr = commUtils.checkTypeBackString(arr, separa?)
```
| 输入 | 输出 |
| --------- | --------- |
| commUtils.checkTypeBackString([1,2,3,4])| "1,2,3,4"
| commUtils.checkTypeBackString([1,2,3,4], ";")| "1;2;3;4"


## 时间-常用转化方法

### 禁止选择星期天
```
import { DatePicker } from "antd";

/*
禁止选择星期天--commUtils.disableDateWeek(e)
*/
<DatePicker
  disabledDate={e => commUtils.disableDateWeek(e)}
/>
```

### 禁止日期选择区间
```
/*
禁止日期选择区间
startDt: 开始日期（可选）
endDt: 结束日期（可选）
disBeforeToday: 选择今天之前的日期，默认false（可选）
dtFormat: 时间格式，默认“YYYY-MM-DD”（可选）
*/
开始日期使用--commUtils.disabledStartDt(e, startDt, endDt, disBeforeToday, dtFormat)
结束日期使用--commUtils.disabledEndDt(e, startDt, endDt, disBeforeToday, dtFormat)
<DatePicker
  disabledDate={e => commUtils.disabledStartDt(e, startDate, endDate)}
/>
<DatePicker
  disabledDate={e => commUtils.disabledEndDt(e, startDate, endDate)}
/>
```

### 传入日期，返回指定格式的日期
```
/*
  传入日期，返回指定格式的日期
  t: 不穿返回原数据， t=today返回当前日期（可选）
  dtFormat: 时间格式，默认"YYYY-MM-DD"（可选）
*/
commUtils.backFormatDate(t, dtFormat)
```

### 传入日期，返回moment格式的日期
```
/*
  传入日期，返回指定格式的日期
  dtFormat: 时间格式，默认"YYYY-MM-DD"（可选）
*/
commUtils.backFormatMoment(t, dtFormat)
```

## 对象-常用转化方法

### 判断对象多层结构数据是否存在、 不存在返回undefined
```
/*
  判断对象多层结构数据是否存在、 不存在返回undefined
  let KM_TEMPNOTICE_RECONSITU = commUtils.checkHasData(obj, ['OA_TACASEMGTAPPROVE', 'XML4CLOBINFO', 'CLOBINFO', 'KM_TEMPNOTICE_RECONSITU'])
*/
```

### 判断对象1中的值在对象2中是否相等 相等返回 true, 如果有一个值不相等返回false, objNew中新加的字段不作处理, 只对objPrep中的字段作处理
```
/*
  判断对象1中的值在对象2中是否相等 相等返回 true, 如果有一个值不相等返回false, objNew中新加的字段不作处理, 只对objPrep中的字段作处理
  objPrep原对象，objNew新对象
  arr指定数组里的key不比较，如['userID'] (可选)
  let objPrep = {
    a: 1,
    b: 2
  }
  let objNew = {
    a: 11,
    b: 2
  }
  commUtils.compareDataBlur(objPrep, objNew)
*/
```
| 输入 | 输出 |
| --------- | --------- |
| commUtils.compareDataBlur(objPrep, objNew)| false
| commUtils.compareDataBlur(objPrep, objNew, ["a"])| true

### 输入正数限制，解析不出来返回undefined
```
/*
输入正数限制，解析不出来返回undefined
建议onChange方法使用
input输入数字限制e(value)
dotNum(小数位数) (可选)
commUtils.inputOnlyNumber(e, dotNum = 2)
*/
```

### 数字改千位分割
```
/*
数字改千位分割
commUtils.changeToThousand(num)
*/
```

### 千位字符串转正常数字
```
/*
千位字符串转正常数字
commUtils.stringToThousand(num)
*/
```

### 判断指是否为空 空位false 不为空为true
```
/*
判断指是否为空 空位false 不为空为true
commUtils.notNull(value)
*/
```

### 类组件专属方法change方法
```
/* 类组件专属方法
建议onChange方法使用
输入改变 e输入框值，obj={objKey: '对象的值', key: '键值'}，
如：this.state.obj={a: '1'},则obj={objKey: 'obj', key: 'a'}
objKey 不存在直接设置到obj={ key: 'a'}，this.state.a = '1'
type类型time、inputNumber，剩下的走默认 (可选)
cd回掉 (可选)
*/
commUtils.changeFun(e, _this, obj, type, cd)
```