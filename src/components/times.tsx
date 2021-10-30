import moment from "moment";
const formatDate = "YYYY-MM-DD"

// 禁止选择星期天
export function disableDateWeek(e: object) {
  var weekOfday = moment(e).format("E");
  if (weekOfday === "6" || weekOfday === "7") {
    return true;
  } else {
    return false;
  }
}
// 禁止开始日期选择
export function disabledStartDt(e: any, startDt?: any, endDt?: any, disBeforeToday?: boolean, dtFormat: string = formatDate) {
  e = moment(e).format(dtFormat);
  if (e && typeof e == "string") {
    e = moment(e, dtFormat);
  }
  if (startDt && typeof startDt == "string") {
    startDt = moment(startDt, dtFormat);
  }
  if (endDt && typeof endDt == "string") {
    endDt = moment(endDt, dtFormat);
  }
  if (e && endDt) {
    if (disBeforeToday) {
      return e < moment().startOf("day") || e.valueOf() > endDt.valueOf();
    }
    return e.valueOf() > endDt.valueOf();
  } else if (e && disBeforeToday) {
    return e < moment().startOf("day");
  }
  return false;
}
// 禁止结束日期选择
export function disabledEndDt(e: any, startDt?: any, endDt?: any, disBeforeToday?: boolean, dtFormat: string = formatDate) {
  e = moment(e).format(dtFormat);
  if (e && typeof e == "string") {
    e = moment(e, dtFormat);
  }
  if (startDt && typeof startDt == "string") {
    startDt = moment(startDt, dtFormat);
  }
  if (endDt && typeof endDt == "string") {
    endDt = moment(endDt, dtFormat);
  }
  if (e && startDt && endDt) {
    let res =
      startDt.valueOf() > endDt.valueOf() ? endDt.valueOf() : startDt.valueOf();
    if (disBeforeToday) {
      return e < moment().startOf("day") || e.valueOf() > res.valueOf();
    }
    return e.valueOf() < res.valueOf();
  } else if (e && startDt) {
    if (disBeforeToday) {
      return e < moment().startOf("day") || e.valueOf() < startDt.valueOf();
    }
    return e.valueOf() < startDt.valueOf();
  } else if (e && disBeforeToday) {
    return e < moment().startOf("day");
  }
  return false;
}

/*
  传入日期，返回指定格式的日期
  t: 不穿返回原数据， t=today返回当前日期（可选）
  dtFormat: 时间格式，默认"YYYY-MM-DD"（可选）
*/
export function backFormatDate(t?:any, dtFormat: string = formatDate) {
  if(t==='today'){
    return moment(undefined).format(dtFormat);
  } else {
    if (t) {
      return moment(t, dtFormat).format(dtFormat);
    } else {
      return t;
    }
  }
}
/*
  传入日期，返回moment格式的日期
  dtFormat: 时间格式，默认"YYYY-MM-DD"（可选）
*/
export function backFormatMoment(t:any, dtFormat: string = formatDate) {
  return t? moment(t, dtFormat): t;
}