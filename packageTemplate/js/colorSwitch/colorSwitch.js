const {hexToRgb,rgbToHex} = require('../../../utils/function')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    values:"rgb(112,64,87)"
  },
  onLoad(){
    this.setData({
      value:rgbToHex(this.data.values)
    })
  },
  getMode(e){
    this.setData({
      value:rgbToHex(e.detail.value)
    })
  },
  getModes(e){
    this.setData({
      value:hexToRgb(e.detail.value)
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})