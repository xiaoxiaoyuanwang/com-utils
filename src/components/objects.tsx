
import { backFormatDate } from "./times"
import { inputOnlyNumber } from "./numbers"

/*
  判断对象多层结构数据是否存在、 不存在返回undefined
  let KM_TEMPNOTICE_RECONSITU = checkHasData(this.state.dataFiled, ['OA_TACASEMGTAPPROVE', 'XML4CLOBINFO', 'CLOBINFO', 'KM_TEMPNOTICE_RECONSITU'])
*/
export function checkHasData(obj: object, arr: Array<string>, idx?: number): any {
  let res;
  let i = 0;
  if (idx) {
    i = idx;
  }
  if (arr.length <= i) {
    res = obj;
  } else {
    const element = arr[i];
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
export function compareDataBlur(objPrep: object, objNew: object, arr?: Array<string>) {
  if ((objPrep && !objNew) || (objNew && !objPrep)) {
    return false;
  }
  let flag = true;
  for (var key in objNew) {
    // objNew[key]没有值不做比较
    if (objPrep.hasOwnProperty(key)) {
      let flag1 =
        objPrep[key] !== null && objPrep[key] !== undefined && objPrep[key] !== "";
      let flag2 =
        objNew[key] !== null && objNew[key] !== undefined && objNew[key] !== "";
      let flag3 = (arr || []).indexOf(key);
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
export function changeFun(e: any, _this: any, obj: any, type?: string, cd?: (__e: any, __this: any, __obj: any, __type?: string) => void) {
  let val = e;
  if (type == "time") {
    val = backFormatDate(e, obj.dateFormat);
  } else {
    val = e && e.target ? e.target.value : e;
  }
  if (obj.objKey) {
    let dt = JSON.parse(JSON.stringify(_this.state[obj.objKey]));
    if (type == "inputNumber") {
      val =
        inputOnlyNumber(val, obj.dotNum) !== undefined
          ? inputOnlyNumber(val, obj.dotNum)
          : dt[obj.key];
    }
    dt[obj.key] = val;
    _this.setState(
      {
        [obj.objKey]: dt
      },
      () => {
        if (cd) {
          cd(e, _this, obj, type);
        }
      }
    );
  } else {
    if (type == "inputNumber") {
      val =
        inputOnlyNumber(val, obj.dotNum) !== undefined
          ? inputOnlyNumber(val, obj.dotNum)
          : _this.state[obj.key];
    }
    _this.setState(
      {
        [obj.key]: val
      },
      () => {
        if (cd) {
          cd(e, _this, obj, type);
        }
      }
    );
  }
}