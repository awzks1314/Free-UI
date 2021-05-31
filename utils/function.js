// 时间方法

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/** 
 * 时间戳转化为年 月 日 时 分 秒 
 * number: 传入时间戳 
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致 
*/
function timeFormat(number, format) {

  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];

  var date = new Date(number * 1000);
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

//todate默认参数是当前日期，可以传入对应时间 todate格式为2018-10-05
// 获取d当前时间多少天后的日期和对应星期
function getDates(days, todate) {
  var dateArry = [];
  for (var i = 0; i < days; i++) {
    var dateObj = dateLater(todate, i);
    dateArry.push(dateObj)
  }
  return dateArry;
}
function dateLater(dates, later) {
  let dateObj = {};
  let show_day = new Array('周日', '周一', '周二', '周三', '周四', '周五', '周六');
  let date = new Date(dates);
  date.setDate(date.getDate() + later);
  let day = date.getDay();
  let yearDate = date.getFullYear();
  let month = ((date.getMonth() + 1) < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1);
  let dayFormate = (date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate());
  dateObj.time = yearDate + '-' + month + '-' + dayFormate;
  dateObj.week = show_day[day];
  return dateObj;
}

// 多久之前
function beautifyTime(time){
  const delta = (new Date().getTime() - time) / 1000
    if (delta / (60 * 60 * 24 * 365) > 1)
      return `${parseInt(delta / (60 * 60 * 24 * 365))}年前`
    if (delta / (60 * 60 * 24 * 30) > 1)
      return `${parseInt(delta / (60 * 60 * 24 * 30))}个月前`
    if (delta / (60 * 60 * 24 * 7) > 1)
      return `${parseInt(delta / (60 * 60 * 24 * 7))}周前`
    if (delta / (60 * 60 * 24) > 1)
      return `${parseInt(delta / (60 * 60 * 24))}天前`
    if (delta / (60 * 60) > 1) return `${parseInt(delta / (60 * 60))}小时前`
    if (delta / 60 > 1) return `${parseInt(delta / 60)}分钟前`
    if (delta / 60 <= 1) return `刚刚`
}

//公共js，主要做表单验证，以及基本方法封装
const utils = {
  isNullOrEmpty: function(value) {
    //是否为空
    return (value === null || value === '' || value === undefined) ? true : false;
  },
  trim: function(value,pos = 'both') {
    if (pos == 'both') {
      return value.replace(/^\s+|\s+$/g, "");
    } else if (pos == "left") {
      return value.replace(/^\s*/, '');
    } else if (pos == 'right') {
      return value.replace(/(\s*$)/g, "");
    } else if (pos == 'all') {
      return value.replace(/\s+/g, "");
    } else {
      return value; 
    }
  },
  isMobile: function(value) {
    //是否为手机号
    return /^(?:13\d|14\d|15\d|16\d|17\d|18\d|19\d)\d{5}(\d{3}|\*{3})$/.test(value);
  },
  isFloat: function(value) {
    //金额，只允许保留两位小数
    return /^([0-9]*[.]?[0-9])[0-9]{0,1}$/.test(value);
  },
  isNum: function(value) {
    //是否全为数字
    return /^[0-9]+$/.test(value);
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
  isNullOrEmpty: utils.isNullOrEmpty,
  trim: utils.trim,
  isMobile: utils.isMobile,
  isFloat: utils.isFloat,
  isNum: utils.isNum,
  formatNum: utils.formatNum,
  timeFormat: timeFormat,
  getDates: getDates,
  beautifyTime:beautifyTime
}
