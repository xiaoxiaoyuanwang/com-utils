import moment from "moment";
var formatDate = "YYYY-MM-DD";
// 禁止选择星期天
export function disableDateWeek(e) {
    var weekOfday = moment(e).format("E");
    if (weekOfday === "6" || weekOfday === "7") {
        return true;
    }
    else {
        return false;
    }
}
// 禁止开始日期选择
export function disabledStartDt(e, startDt, endDt, disBeforeToday, dtFormat) {
    if (dtFormat === void 0) { dtFormat = formatDate; }
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
    }
    else if (e && disBeforeToday) {
        return e < moment().startOf("day");
    }
    return false;
}
// 禁止结束日期选择
export function disabledEndDt(e, startDt, endDt, disBeforeToday, dtFormat) {
    if (dtFormat === void 0) { dtFormat = formatDate; }
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
        var res = startDt.valueOf() > endDt.valueOf() ? endDt.valueOf() : startDt.valueOf();
        if (disBeforeToday) {
            return e < moment().startOf("day") || e.valueOf() > res.valueOf();
        }
        return e.valueOf() < res.valueOf();
    }
    else if (e && startDt) {
        if (disBeforeToday) {
            return e < moment().startOf("day") || e.valueOf() < startDt.valueOf();
        }
        return e.valueOf() < startDt.valueOf();
    }
    else if (e && disBeforeToday) {
        return e < moment().startOf("day");
    }
    return false;
}
/*
  传入日期，返回指定格式的日期
  t: 不穿返回原数据， t=today返回当前日期（可选）
  dtFormat: 时间格式，默认"YYYY-MM-DD"（可选）
*/
export function backFormatDate(t, dtFormat) {
    if (dtFormat === void 0) { dtFormat = formatDate; }
    if (t === 'today') {
        return moment(undefined).format(dtFormat);
    }
    else {
        if (t) {
            return moment(t, dtFormat).format(dtFormat);
        }
        else {
            return t;
        }
    }
}
