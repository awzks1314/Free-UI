// pages/module/progress/progress.js
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
    let that = this;
    setTimeout(function() {
      that.setData({
        loading: true
      })
    }, 500)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})