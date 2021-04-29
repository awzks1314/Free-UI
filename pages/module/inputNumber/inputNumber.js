// pages/module/inputNumber/inputNumber.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:1,
    value1:10,
    value2:3,
    value3:2.1,
    value4:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  getValue(e){
    this.setData({
      value:e.detail.value
    })
  },
  getValue1(e){
    this.setData({
      value1:e.detail.value
    })
  },
  getValue2(e){
    this.setData({
      value2:e.detail.value
    })
  },
  getValue3(e){
    this.setData({
      value3:e.detail.value
    })
  },
  getValue4(e){
    this.setData({
      value4:e.detail.value
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})