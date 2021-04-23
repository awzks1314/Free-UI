// pages/basic/border/border.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    tabs:[
      {name:'边框'},
      {name:'圆角'},
      {name:'阴影'},
    ]
  },
  // 改变选择tab
  change(e){
    this.setData({
      currentTab:e.detail.index
    })
  },
  copy(e){
    wx.setClipboardData({ 
      data: e.currentTarget.dataset.name
    })
  }
})