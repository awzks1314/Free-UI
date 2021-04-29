// pages/module/rate/rate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    index:3
  },
  change (e) {
    this.setData({
      index: e.detail.index,
      current: e.detail.index
    })
  }
})