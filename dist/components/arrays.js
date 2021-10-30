// 判断数据为字符串还是数字，并转换成数组
export function checkTypeBackArray(str, separa) {
    if (separa === void 0) { separa = ","; }
    if (str) {
        if (typeof str === "string" || typeof str === "number") {
            var bcValue = str.toString().split(separa);
            return bcValue;
        }
        else if (Object.prototype.toString.call(str) === "[object Array]") {
            return str;
        }
    }
    else {
        return [];
    }
}
// 判断数据为数组，并转换成字符串
export function checkTypeBackString(arr, separa) {
    if (separa === void 0) { separa = ","; }
    if (arr) {
        if (typeof arr === "string" || typeof arr === "number") {
            return arr;
        }
        else if (Object.prototype.toString.call(arr) === "[object Array]") {
            var bcValue = arr.join(separa);
            return bcValue;
        }
    }
    else {
        return "";
    }
}
