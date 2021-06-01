//验证js，主要做表单验证，以及基本方法封装
const utils = {
  isMobile: function(value) {
    //是否为手机号
    return /^(?:13\d|14\d|15\d|16\d|17\d|18\d|19\d)\d{5}(\d{3}|\*{3})$/.test(value);
  },
  isEmail:  function (value) {
    // 是否邮箱
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  },
  isDate: function (value) {
    // 是否是日期格式
    return !/Invalid|NaN/.test(new Date(value).toString())
  },
  isDateISO: function (value) {
    // 是否是ISO日期
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value)
  },
  isDigits: function(value) {
    // 是否是整数
    return /^\d+$/.test(value)
  },
  isIdCard: function(value) {
    // 验证身份证号码
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value)
  },
  isChinese: function(value) {
    // 验证中文
    let reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  },
  isFloat: function(value) {
    //金额，只允许保留两位小数
    return /^([0-9]*[.]?[0-9])[0-9]{0,1}$/.test(value);
  },
  isNum: function(value) {
    //是否全为数字
    return /^[0-9]+$/.test(value);
  },
  isLetter: function(value) {
    // 全为字母
    return /^[a-zA-Z]*$/.test(value);
  },
  isEnOrNum: function(value) {
    //英文或者数字
    let reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  },
  isContains: function(value, param) {
    // 验证是否包含某个值
    return value.indexOf(param) >= 0
  },
  isRange: function(value, param) {
    // 验证一个值范围[min,max]
    return value >= param[0] && value <= param[1]
  },
  isRangeLength: function(value, param) {
    // 验证一个长度范围
    return value.length >= param[0] && value.length <= param[1]
  },
  isEmpty: function(value) {
    // 是否为空
    switch (typeof value) {
      case 'undefined':
        return true;
      case 'string':
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
        break;
      case 'boolean':
        if (!value) return true;
        break;
      case 'number':
        if (0 === value || isNaN(value)) return true;
        break;
      case 'object':
        if (null === value || value.length === 0) return true;
        for (var i in value) {
          return false;
        }
        return true;
    }
    return false;
  },
  isJsonString: function(value) {
    // 是否是json字符串
    if (typeof value == 'string') {
      try {
        var obj = JSON.parse(value);
        if (typeof obj == 'object' && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    }
    return false;
  },
  isArray: function(value) {
    // 是否是数组
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    } else {
      return Object.prototype.toString.call(value) === "[object Array]";
    }
  },
  isObject: function(value) {
    // 是否是对象
    return Object.prototype.toString.call(value) === '[object Object]';
  },  
  formatNum: function(num) {
    //格式化手机号码
    if (utils.isMobile(num)) {
      num = num.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
    return num;
  }
}
module.exports = {
  utils: utils
}
