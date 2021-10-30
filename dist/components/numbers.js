import { backFormatDate } from "./times";
var formatDate = "YYYY-MM-DD";
/*
  判断对象多层结构数据是否存在、 不存在返回undefined
  let KM_TEMPNOTICE_RECONSITU = checkHasData(this.state.dataFiled, ['OA_TACASEMGTAPPROVE', 'XML4CLOBINFO', 'CLOBINFO', 'KM_TEMPNOTICE_RECONSITU'])
*/
export function checkHasData(obj, arr, idx) {
    var res;
    var i = 0;
    if (idx) {
        i = idx;
    }
    if (arr.length <= i) {
        res = obj;
    }
    else {
        var element = arr[i];
        if (element) {
            if (obj[element]) {
                return checkHasData(obj[element], arr, i + 1);
            }
        }
    }
    return res;
}
/*
  判断对象1中的值在对象2中是否相等 相等返回 true, 如果有一个值不相等返回false, objNew中新加的字段不作处理, 只对objPrep中的字段作处理
  objPrep原对象，objNew新对象
  arr指定数组里的key不比较，如['userID'] (可选)
*/
export function compareDataBlur(objPrep, objNew, arr) {
    if ((objPrep && !objNew) || (objNew && !objPrep)) {
        return false;
    }
    var flag = true;
    for (var key in objNew) {
        // objNew[key]没有值不做比较
        if (objPrep.hasOwnProperty(key)) {
            var flag1 = objPrep[key] !== null && objPrep[key] !== undefined && objPrep[key] !== "";
            var flag2 = objNew[key] !== null && objNew[key] !== undefined && objNew[key] !== "";
            var flag3 = (arr || []).indexOf(key);
            if (flag3 == -1) {
                if (flag1 || flag2) {
                    if (JSON.stringify(objPrep[key]) != JSON.stringify(objNew[key])) {
                        console.log("diff", key, objPrep[key], objNew[key]);
                        flag = false;
                    }
                }
            }
        }
    }
    return flag;
}
/* 类组件专属方法
输入改变 e输入框值，obj={objKey: '对象的值', key: '键值'}，
如：this.state.obj={a: '1'},则obj={objKey: 'obj', key: 'a'}
objKey 不存在直接设置到obj={ key: 'a'}，this.state.a = '1'
type类型time、inputNumber，剩下的走默认
*/
export function changeFun(e, _this, obj, type, cd) {
    var _a, _b;
    var val = e;
    if (type == "time") {
        val = backFormatDate(e, obj.dateFormat);
    }
    else {
        val = e && e.target ? e.target.value : e;
    }
    if (obj.objKey) {
        var dt = JSON.parse(JSON.stringify(_this.state[obj.objKey]));
        if (type == "inputNumber") {
            val =
                inputOnlyNumber(val, obj.dotNum) !== undefined
                    ? inputOnlyNumber(val, obj.dotNum)
                    : dt[obj.key];
        }
        dt[obj.key] = val;
        _this.setState((_a = {},
            _a[obj.objKey] = dt,
            _a), function () {
            if (cd) {
                cd(e, _this, obj, type);
            }
        });
    }
    else {
        if (type == "inputNumber") {
            val =
                inputOnlyNumber(val, obj.dotNum) !== undefined
                    ? inputOnlyNumber(val, obj.dotNum)
                    : _this.state[obj.key];
        }
        _this.setState((_b = {},
            _b[obj.key] = val,
            _b), function () {
            if (cd) {
                cd(e, _this, obj, type);
            }
        });
    }
}
/*
输入正数限制，解析不出来返回undefined
input输入数字限制e(value), dotNum(小数位数)
*/
export function inputOnlyNumber(e, dotNum, minusFlag) {
    if (dotNum === void 0) { dotNum = 2; }
    var value = e.replace(/[^\d.]/g, "");
    if (minusFlag) {
        value = value.replace(/[^\-?\d.]/g, "");
    }
    var str = "'" + value + "'";
    var idx1 = str.indexOf(".");
    var idx0 = str.indexOf("00");
    // 第一位是小输点，清空
    if (idx1 === 1) {
        value = "";
        return;
    }
    // 最前面出现多个0，清空
    if (idx0 === 1) {
        value = "";
        return;
    }
    // 去除第一个‘.’后面的点
    value = value
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".");
    str = "'" + value + "'";
    idx1 = str.indexOf(".");
    // 有小数点时保留几位小数
    if (idx1 != -1) {
        value = value.slice(0, value.indexOf(".") + (dotNum) + 1);
    }
    return value;
}
/*
判断指是否为空 空位false 不为空为true
*/
export function notNull(value) {
    return !(!value && value != 0);
}
/*
数字改千位分割
*/
export function changeToThousand(num) {
    if (!notNull(num)) {
        return num;
    }
    var resNum;
    num = (num + "").replace(/,/g, "");
    resNum = Number(num);
    if (resNum >= 0) {
        return (num && num.toString().replace(/^\d+/, function (m) { return m.replace(/(?=(?!^)(\d{3})+$)/g, ","); }));
    }
    else {
        num = 0 - num;
        return ("-" +
            (num && num.toString().replace(/^\d+/, function (m) { return m.replace(/(?=(?!^)(\d{3})+$)/g, ","); })));
    }
}
/*
千位字符串转正常数字
*/
export function stringToThousand(num) {
    if (!notNull(num)) {
        return num;
    }
    return num.replace(/\,/g, "");
}
