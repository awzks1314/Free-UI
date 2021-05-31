// 引入外部js,utils/function.js
const {beautifyTime,timeFormat} = require('../../../utils/function')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    times:'1622450627808',
    time:''
  },
  onLoad(){    
    this.setData({
      time:beautifyTime(this.data.times),
    })
  },
  getMode(e){

    // 转为时间戳在调用方法，
    this.setData({
      time:beautifyTime(new Date(e.detail.value).getTime()),
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})