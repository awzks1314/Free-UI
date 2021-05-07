// pages/extend/indexes/indexes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  look(e){
    wx.navigateTo({
      url: `/pages/extend/indexes/${e.currentTarget.dataset.type}/${e.currentTarget.dataset.type}`
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})