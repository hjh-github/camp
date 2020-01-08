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
  static dateFormate(date, fmt) {
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
  // 检验身份证
  static checkIdCard(IDCard) {
    var iSum = 0;
    var info = "";
    if (!/^\d{17}(\d|x)$/i.test(IDCard))
      return {
        status: false,
        message: '输入的身份证长度或格式错误!'
      };
    IDCard = IDCard.replace(/x$/i, "a");
    // if (areaID[parseInt(IDCard.substr(0, 2))] == null)
    //   return {
    //     status: false,
    //     message: '输入的身份证有误!'
    //   };
    var sBirthday = IDCard.substr(6, 4) + "-" + Number(IDCard.substr(10, 2)) + "-" + Number(IDCard.substr(12, 2));
    var d = new Date(sBirthday.replace(/-/g, "/"));
    if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()))
      return {
        status: false,
        message: '输入的身份证有误!'
      };
    for (var i = 17; i >= 0; i--)
      iSum += (Math.pow(2, i) % 11) * parseInt(IDCard.charAt(17 - i), 11);
    if (iSum % 11 != 1)
      return {
        status: false,
        message: '输入的身份证有误!'
      };
    //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
    return {
      status: true,
      message: '校验成功！'
    };
  }
  // 身份证获取出生年月日
  static getBirthdayByIdCard(idCard) {
    // 校验身份证是否合法
    let _r = this.checkIdCard(idCard)
    if(! _r.status){
      return {
        ..._r
      }
    }
    var birthStr;
    if (15 == idCard.length) {
      birthStr = idCard.charAt(6) + idCard.charAt(7);
      if (parseInt(birthStr) < 10) {
        birthStr = '20' + birthStr;
      } else {
        birthStr = '19' + birthStr;
      }
      birthStr = birthStr + '-' + idCard.charAt(8) + idCard.charAt(9) + '-' + idCard.charAt(10) + idCard.charAt(11);
    } else if (18 == idCard.length) {
      birthStr = idCard.charAt(6) + idCard.charAt(7) + idCard.charAt(8) + idCard.charAt(9) + '-' + idCard.charAt(10) + idCard.charAt(11) + '-' + idCard.charAt(12) + idCard.charAt(13);
    }
    return birthStr;
  }
  static getSexByIdCard (idCard) {
    if(idCard.length == 15) {
      return idCard.substring(14, 15) % 2;
    } else if(idCard.length == 18) {
      return idCard.substring(14, 17) % 2;
    } else {
      //不是15或者18,null
      return '';
    }
  }
}

