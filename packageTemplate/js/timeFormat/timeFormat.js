// 引入外部js,utils/function.js
const {timeFormat} = require('../../../utils/function')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:1622249393844,
    times:''
  },
  onShow(){
    // 看时间戳格式13位需要除1000传入方法，9位时间戳不用除
    this.setData({
      times:timeFormat(this.data.time/1000,'Y-M-D')
    })
  },
  getMode(e){
    this.setData({
      times:timeFormat(this.data.time/1000,e.detail.value)
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})