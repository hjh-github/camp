export default class Lang {
  // 判断字符串是否为空
  static isEmpty(str) {
    return str == '' || str == null || str == 'null';
  }
  // 判断字符串是否不为空
  static isNotEmpty(str) {
    return !this.isEmpty(str);
  }
  // 浮点求和
  static sum(numbers, toFixed = 2) {
    let sum = 0;
    for (const str of numbers) {
      if (!this.isNumber(str)) {
        return NaN;
      }
      const num = parseFloat(str);
      if (isNaN(num)) {
        return NaN;
      }
      sum += num;
    }
    return sum.toFixed(toFixed);
  }
  // 数字判断
  static isNumber(value) {
    const patrn = /^[-+]?\d+(\.\d+)?$/;
    return patrn.test(value);
  }

  // 数字判断
  static isPositiveNumber(value) {
    const patrn = /^[1-9]\d*$|^\.\d*$|^0\.\d*$|^[1-9]\d*\.\d*$|^0$/;
    return patrn.test(value);
  }
  // 数组判断
  static isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
  }
  // 事件转日期
  static convertTimestapeToDay(timestape) {
    return timestape.substring(0, timestape.indexOf(' ')).replace(/-/g, '.');
  }

  // 格式化日期
  static dateFormate (date, fmt) {
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S': date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
    return fmt;
  }
   /**
     * 获取距离当前日期第n天的日期
     * @param {n} day 
     */
    static getDay(day) {
      var today = new Date();
      var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
      today.setTime(targetday_milliseconds); //注意，这行是关键代码
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      return tYear + "-" + tMonth + "-" + tDate;
  }
  static doHandleMonth(month) {
    var m = month;
    if (month.toString().length == 1) {
        m = "0" + month;
    }
    return m;
}
}
