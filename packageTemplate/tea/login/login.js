// packageTemplate/tea/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 登录成功
  login(){
    wx.setStorageSync('name', '搞文艺的猿')
    wx.navigateBack({
      delta: 0,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})