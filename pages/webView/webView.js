// pages/webView/webView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      src:options.url
    })
  },
  
})