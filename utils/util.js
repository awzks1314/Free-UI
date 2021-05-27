import qrcode from './qrcode';
// import barcode from './barcode';
function convert_length(length) {
  return Math.round(wx.getSystemInfoSync().windowWidth * length / 750);
}
function barc(id, code, width, height) {
  barcode.code128(wx.createCanvasContext(id), code, convert_length(width), convert_length(height));
}

function qrc(id, src, code, width, height) {
  qrcode.api.draw(id, src, code, {
    ctx: wx.createCanvasContext(id),
    width: convert_length(width),
    height: convert_length(height)
  })
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//公共js，主要做表单验证，以及基本方法封装
const utils = {
  isNullOrEmpty: function(value) {
    //是否为空
    return (value === null || value === '' || value === undefined) ? true : false;
  },
  trim: function(value) {
    //去空格
    return value.replace(/(^\s*)|(\s*$)/g, "");
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

function getUrl(){
  var pages = getCurrentPages()//获取加载的页面
  var currentPage = pages[pages.length - 1] //获取当前页面的对象
  var url = currentPage.route//当前页面的url

  var options = currentPage.options //获取url中的参数


  var urlWithAges = url + '?'
  for (var key in options){
    var value = options[key]
    urlWithAges += key+'='+value+'&'
  }
  urlWithAges = urlWithAges.substring(0,urlWithAges.length - 1)
  wx.setStorageSync('url', `/${urlWithAges}`)
}
module.exports = {
  formatTime: formatTime,
  isNullOrEmpty: utils.isNullOrEmpty,
  trim: utils.trim,
  isMobile: utils.isMobile,
  isFloat: utils.isFloat,
  isNum: utils.isNum,
  formatNum: utils.formatNum,
  // barcode: barc,
  qrcode: qrc,
  getUrl
}

