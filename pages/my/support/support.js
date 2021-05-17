// pages/my/support/support.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.previewImage({
      urls: ['cloud://freeui-8gr0qrob21525637.6672-freeui-8gr0qrob21525637-1305934642/wechat.jpg']
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})