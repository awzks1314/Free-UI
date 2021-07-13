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
function timeFormat(number , format) {

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

function trim(value,pos = 'both') {
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
}


// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor, str = true) {
	let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	sColor = sColor.toLowerCase();
	if (sColor && reg.test(sColor)) {
		if (sColor.length === 4) {
			let sColorNew = "#";
			for (let i = 1; i < 4; i += 1) {
				sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
			}
			sColor = sColorNew;
		}
		//处理六位的颜色值
		let sColorChange = [];
		for (let i = 1; i < 7; i += 2) {
			sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
		}
		if(!str) {
			return sColorChange;
		} else {
			return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
		}
	} else if (/^(rgb|RGB)/.test(sColor)) {
		let arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",")
		return arr.map(val => Number(val));
	} else {
		return sColor;
	}
};

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
	let _this = rgb;
	let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
	if (/^(rgb|RGB)/.test(_this)) {
		let aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
		let strHex = "#";
		for (let i = 0; i < aColor.length; i++) {
			let hex = Number(aColor[i]).toString(16);
			hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
			if (hex === "0") {
				hex += hex;
			}
			strHex += hex;
		}
		if (strHex.length !== 7) {
			strHex = _this;
		}
		return strHex;
	} else if (reg.test(_this)) {
		let aNum = _this.replace(/#/, "").split("");
		if (aNum.length === 6) {
			return _this;
		} else if (aNum.length === 3) {
			let numHex = "#";
			for (let i = 0; i < aNum.length; i += 1) {
				numHex += (aNum[i] + aNum[i]);
			}
			return numHex;
		}
	} else {
		return _this;
	}
}



module.exports = {
  trim,
  timeFormat,
  getDates,
  beautifyTime,
  hexToRgb,
	rgbToHex
}
