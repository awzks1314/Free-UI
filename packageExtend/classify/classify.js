// pages/extend/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  look(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})