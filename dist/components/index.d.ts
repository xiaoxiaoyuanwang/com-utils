declare const _default: {
    checkHasData(obj: object, arr: string[], idx?: number): any;
    compareDataBlur(objPrep: object, objNew: object, arr?: string[]): boolean;
    changeFun(e: any, _this: any, obj: any, type?: string, cd?: (__e: any, __this: any, __obj: any, __type?: string) => void): void;
    inputOnlyNumber(e: any, dotNum?: number, minusFlag?: boolean): any;
    notNull(value: any): boolean;
    changeToThousand(num: any): any;
    stringToThousand(num: any): any;
    disableDateWeek(e: object): boolean;
    disabledStartDt(e: any, startDt?: any, endDt?: any, disBeforeToday?: boolean, dtFormat?: string): boolean;
    disabledEndDt(e: any, startDt?: any, endDt?: any, disBeforeToday?: boolean, dtFormat?: string): boolean;
    backFormatDate(t?: any, dtFormat?: string): any;
    backFormatMoment(t: any, dtFormat?: string): any;
    checkTypeBackArray(str: any, separa?: string): any;
    checkTypeBackString(arr: any, separa?: string): any;
};
export default _default;
