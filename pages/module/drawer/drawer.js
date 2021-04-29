// pages/module/drawer/drawer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottom:false,
    left:false,
    right:false,
    bottom:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  openDrawer(e){
    this.setData({
      [e.currentTarget.dataset.type]:true
    })
  },
  closeDrawer(e){
    this.setData({
      [e.currentTarget.dataset.type]:false
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})