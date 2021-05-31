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

  // barcode: barc,
  qrcode: qrc,
  getUrl
}

