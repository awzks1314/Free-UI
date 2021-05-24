const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    teaList:app.globalData.teaList,
    StatusBar:app.globalData.StatusBar
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})