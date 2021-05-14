// pages/basic/border/border.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'solid',
    position:''
  },
  getMode(e){
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value=='默认'?'':e.detail.value
    })
  },
  copy(e){
    wx.setClipboardData({ 
      data: e.currentTarget.dataset.name
    })
  }
})