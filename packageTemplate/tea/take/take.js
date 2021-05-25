const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teaList:app.globalData.teaList,
    login:false
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})